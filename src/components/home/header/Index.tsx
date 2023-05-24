import Image from "next/image";
import React from "react";

const Header = () => {
  return (
    <header>
      <Image
        src="/images/header/logo.png"
        alt="logo"
        width={103}
        height={29}
        priority
      />
      <div>
        <Image
          src="/images/header/add-post.png"
          alt="add post"
          width={24}
          height={24}
        />
        <Image
          src="/images/header/notification.png"
          alt="notification"
          width={24}
          height={24}
        />
      </div>
    </header>
  );
};

export default Header;
