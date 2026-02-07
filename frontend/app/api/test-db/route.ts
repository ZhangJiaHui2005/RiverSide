import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import mongoose from 'mongoose';

export async function GET() {
  try {
    await connectDB();
    
    // Kiểm tra trạng thái kết nối
    const isConnected = mongoose.connection.readyState === 1;

    return NextResponse.json({ 
      message: isConnected ? "Kết nối Database thành công!" : "Đang kết nối...",
      status: mongoose.connection.readyState 
    });
  } catch (error: any) {
    return NextResponse.json({ 
      message: "Lỗi kết nối rồi!", 
      error: error.message 
    }, { status: 500 });
  }
}