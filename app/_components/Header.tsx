import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
    <div className="flex justify-between items-center p-4">
      {/* Logo */}
      <div className="flex gap-2 items-center">
        <Image src={"/logo.svg"} alt="logo" width={30} height={30} />
        <h2 className="font-bold text-2xl">AI Trip Planner</h2>
      </div>

      {/* Menu Options */}
      <div className="flex gap-8 items-center">
        {menuOption.map((menu,index)=>
            <Link key={index} href={menu.path}>
                <h2 className="text-lg font-bold hover:scale-105 transition-all hover:text-primary">{menu.name}</h2>  
            </Link>   
        )}
      </div>

      {/* Get Started Button */}
      <Button>Get Started</Button>
    </div>
  );
};

export default Header;
