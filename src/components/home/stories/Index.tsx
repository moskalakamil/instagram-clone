import Image from "next/image";
import React from "react";

interface IProps {
  users: any;
}

const Stories = ({ users }: IProps) => {
  return (
    <div className=" bg-gray-100 w-full h-20">
      {users.map((user: any) => (
        <div key={user.id}>
          <Image src={user.image} alt="profile" width={250} height={250} />
          <p>{user.username}</p>
        </div>
      ))}
    </div>
  );
};

export default Stories;
