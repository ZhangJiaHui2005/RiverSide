import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ClerkProvider } from "@clerk/nextjs";
import SyncUser from "@/components/SyncUser";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "RiverSide",
  description: "Đặt phòng khách sạn theo lựa chọn của bạn",
  icons: {
    icon: "/logo.svg",          // favicon chính
    shortcut: "/logo.svg",      // cho browser
    apple: "/logo.svg",         // iOS
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="vi">
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <SyncUser />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
