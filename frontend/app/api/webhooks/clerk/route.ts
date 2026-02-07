// app/api/webhooks/clerk/route.ts
import { Webhook } from 'svix'
import { headers } from 'next/headers'
import { WebhookEvent } from '@clerk/nextjs/server'
import { createUser, deleteUser, updateUser } from '@/lib/actions/user.action'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  // 1. Lấy WEBHOOK_SECRET từ .env
  const WEBHOOK_SECRET = process.env.WEBHOOK_SECRET
  if (!WEBHOOK_SECRET) {
    throw new Error('Please add WEBHOOK_SECRET from Clerk Dashboard to .env or .env.local')
  }

  // 2. Lấy headers để xác thực
  const headerPayload = await headers();
  const svix_id = headerPayload.get("svix-id");
  const svix_timestamp = headerPayload.get("svix-timestamp");
  const svix_signature = headerPayload.get("svix-signature");

  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error occured -- no svix headers', { status: 400 })
  }

  // 3. Xác thực payload
  const payload = await req.json()
  const body = JSON.stringify(payload);
  const wh = new Webhook(WEBHOOK_SECRET);
  let evt: WebhookEvent

  try {
    evt = wh.verify(body, {
      "svix-id": svix_id,
      "svix-timestamp": svix_timestamp,
      "svix-signature": svix_signature,
    }) as WebhookEvent
  } catch (err) {
    console.error('Error verifying webhook:', err);
    return new Response('Error occured', { status: 400 })
  }

  // 4. Xử lý sự kiện (Create, Update, Delete)
  const eventType = evt.type;

  if (eventType === 'user.created') {
    const { id, email_addresses, first_name, last_name, username, image_url } = evt.data;

    const user = {
      clerkId: id,
      email: email_addresses[0].email_address,
      username: username || email_addresses[0].email_address.split('@')[0], // Logic xử lý username null
      firstName: first_name || '', 
      lastName: last_name || '',
      photo: image_url,
    }

    const newUser = await createUser(user);
    
    // Opsional: Nếu bạn muốn cập nhật lại metadata bên Clerk để lưu _id của MongoDB
    // if (newUser) {
    //   await clerkClient.users.updateUserMetadata(id, {
    //     publicMetadata: { userId: newUser._id }
    //   })
    // }
    
    return NextResponse.json({ message: 'OK', user: newUser })
  }

  if (eventType === 'user.updated') {
    const { id, image_url, first_name, last_name, username } = evt.data;

    const user = {
      firstName: first_name || '',
      lastName: last_name || '',
      username: username || '',
      photo: image_url,
    }

    const updatedUser = await updateUser(id, user)
    return NextResponse.json({ message: 'OK', user: updatedUser })
  }

  if (eventType === 'user.deleted') {
    const { id } = evt.data;
    await deleteUser(id!)
    return NextResponse.json({ message: 'OK' })
  }

  return new Response('', { status: 200 })
}