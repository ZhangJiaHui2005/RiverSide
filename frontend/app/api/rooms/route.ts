import connectDB from "@/lib/db";
import Room from "@/lib/models/room.model";
import { auth } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
    try {
        await connectDB();

        const rooms = await Room.find().sort({ createdAt: -1 });
        return NextResponse.json({ rooms });
    } catch (error) {
        return NextResponse.json({ error: "Lỗi khi lấy danh sách phòng" }, { status: 500 });
    }
}

export async function POST(req: Request) {
  try {
    const { sessionClaims } = await auth();
    
    // Kiểm tra quyền admin một lần nữa ở tầng API cho chắc chắn
    if (sessionClaims?.metadata?.role !== "admin") {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    await connectDB();
    const body = await req.json();
    const newRoom = await Room.create(body);

    return NextResponse.json(newRoom, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: "Lỗi khi tạo phòng" }, { status: 500 });
  }
}