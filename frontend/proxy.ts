import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// 1. Định nghĩa các Route công khai (Public)
const isPublicRoute = createRouteMatcher([
  "/",
  "/homePage",
  "/hotel-details/(.*)", // Cú pháp mới cho dynamic route
  "/api/uploadthing",
  "/sign-in(.*)",
  "/sign-up(.*)"
]);

// 2. Định nghĩa Route Admin
const isAdminRoute = createRouteMatcher(['/admin(.*)']);

export default clerkMiddleware(async (auth, req) => {
  // Lấy dữ liệu session
  const session = await auth();

  // Kiểm tra nếu là route Admin
  if (isAdminRoute(req)) {
    // Nếu chưa đăng nhập, đá về trang sign-in
    if (!session.userId) {
      return session.redirectToSignIn();
    }

    // Kiểm tra ROLE từ publicMetadata (đã cấu hình trong Clerk Dashboard)
    const role = session.sessionClaims?.metadata?.role;
    
    if (role !== 'admin') {
      // Nếu không phải admin, đá về trang chủ
      return NextResponse.redirect(new URL('/', req.url));
    }
  }

  // Kiểm tra nếu không phải route công khai và chưa đăng nhập
  if (!isPublicRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: [
    // Bỏ qua các file tĩnh và nội bộ của Next.js
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Luôn chạy cho các API routes
    '/(api|trpc)(.*)',
  ],
};