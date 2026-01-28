"use client";

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavBar = () => {
 const router = useRouter()
  return (
    <div className="sticky top-0 z-50 border-b border-primary/10 bg-secondary">
      <div className="mx-auto flex h-22 max-w-7xl items-center justify-between px-4">
        
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer" onClick={() => router.push('/')}>
          <Image src="/logo.svg" alt="logo" width={340} height={198} style={{ marginTop: "20px" }}/>
          
        </div>

        {/* User */}
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default NavBar;