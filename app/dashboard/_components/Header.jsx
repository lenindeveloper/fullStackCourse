import React from "react";
import Image from "next/image";
import { UserButton, UserProfile } from "@clerk/nextjs";
function Header() {
  return (
    <div className="flex justify-between items-center p-5 shadow-sm">
      <Image src={"/logo.svg"} width={100} height={100} />
      <UserButton />
    </div>
  );
}

export default Header;
