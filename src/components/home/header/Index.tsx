import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-3 py-1">
      <Link href={"/"}>
        <Image
          src="/images/header/logo.png"
          alt="logo"
          width={103}
          height={29}
          priority
        />
      </Link>
      <div className="flex gap-2">
        <Link href={"/add-post"}>
          <Image
            src="/images/header/add-post.png"
            alt="add post"
            width={32}
            height={32}
          />
        </Link>
        <Link href={"/notification"}>
          <Image
            src="/images/header/notification.png"
            alt="notification"
            width={32}
            height={32}
          />
        </Link>
      </div>
    </header>
  );
};

export default Header;
