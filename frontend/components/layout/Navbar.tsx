"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";

const activeClass =
  "text-primary border-b-2 border-primary pb-1";

const normalClass =
  "cursor-pointer hover:text-primary transition pb-1";

const NavBar = () => {
 const router = useRouter()
 const pathname = usePathname();
  return (
    <div className="sticky top-0 z-50 h-[96] bg-secondary border-b border-primary/10">
      <div className="mx-auto max-w-7xl h-full flex items-center justify-between px-4">
        
        {/* Logo */}
        <div className="relative w-[260] h-[176] cursor-pointer" onClick={() => router.push("/")}>
          <Image src="/logo.svg" alt="logo" fill className="object-contain" priority/>
        </div>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <span className={pathname === "/trang-chu" ? activeClass : normalClass} onClick={() => router.push("/")}>
            TRANG CHỦ
          </span>

          <span className={pathname === "/gioi-thieu" ? activeClass : normalClass} onClick={() => router.push("/gioi-thieu")}>
            GIỚI THIỆU
          </span>

          <span className={pathname === "/phong-nghi" ? activeClass : normalClass} onClick={() => router.push("/phong-nghi")}>
            PHÒNG NGHỈ
          </span>

          <span className={pathname === "/tien-ich" ? activeClass : normalClass} onClick={() => router.push("/tien-ich")}>
            TIỆN ÍCH
          </span>

          <span className={pathname === "/dich-vu" ? activeClass : normalClass} onClick={() => router.push("/dich-vu")}>
            DỊCH VỤ
          </span>

          <span className={pathname === "/dat-phong" ? activeClass : normalClass} onClick={() => router.push("/dat-phong")}>
            ĐẶT PHÒNG
          </span>

          <span className={pathname === "/lien-he" ? activeClass : normalClass} onClick={() => router.push("/lien-he")}>
            LIÊN HỆ
          </span>
        </div>

        <div className="w-[40] h-[40] flex items-center justify-center">
          <UserButton afterSignOutUrl="/" />
        </div>
      </div>

      
    </div>
  );
};

export default NavBar;