import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-3 py-1">
      <Image
        src="/images/header/logo.png"
        alt="logo"
        width={103}
        height={29}
        priority
      />
      <div className="flex gap-2">
        <Image
          src="/images/header/add-post.png"
          alt="add post"
          width={32}
          height={32}
        />
        <Image
          src="/images/header/notification.png"
          alt="notification"
          width={32}
          height={32}
        />
      </div>
    </header>
  );
};

export default Header;
