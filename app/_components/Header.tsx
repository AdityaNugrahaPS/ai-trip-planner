import React from "react";
import Image from "next/image";

const menuOption = [
  {
    name:'Home',
    path:'/'
  },
  {
    name:'Pricing',
    path:'/pricing',
  },
  {
    name:'Contact Us',
    path:'/contact-us'
  }
]

const Header = () => {
  return (
    <div>
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">AI Trip Planner</h2>
      </div>

      {/* Menu Options */}

      {/* Get Started Button */}
    </div>
  );
};

export default Header;
