import React from "react";
import {
  FolderKanbanIcon,
  HomeIcon,
  MegaphoneIcon,
  SearchIcon,
  UserPenIcon,
  
} from "lucide-react";
import { useState } from "react";

const Navbar = () => {
    const [hover, setHover] = useState(false);
  
  return (
    <div className="">
      <nav className="fixed top-0 left-0 w-full flex items-center justify-between bg-white shadow-md px-6 py-4 z-40">
        <h1 className="text-[#424f74] text-2xl font-extrabold">EdShop</h1>

        <div className="flex items-center bg-gray-200 rounded-full px-3 py-2 w-full md:w-1/2 lg:w-1/3 xl:w-1/4">
          <input
            type="text"
            placeholder="Search EdShop"
            className="w-full bg-transparent outline-none px-2 text-sm md:text-base"
          />
          <SearchIcon className="w-4 h-4 md:w-5 md:h-5 text-gray-500" />
        </div>

        <div className="flex gap-15"
           onMouseEnter={() => setHover(true)}
           onMouseLeave={() => setHover(false)}
        >
    
          <a href="/">
            <HomeIcon size={24} color="black" />
            {hover && (
        <div className="absolute mt-1 bg-black text-white text-xs py-1 px-2 rounded-lg">
          Home
        </div>
      )}
          </a>
          <a href="/adverts" target="_blank" rel="noopener noreferrer">
            <MegaphoneIcon size={24} color="black" />
            {hover && (
        <div className="absolute mt-1 bg-black text-white text-xs py-1 px-2 rounded-lg">
          Adverts
        </div>
      )}
          </a>
          <a href="/adverts/signup" target="_blank" rel="noopener noreferrer">
            <FolderKanbanIcon size={24} color="black" />
            {hover && (
        <div className="absolute mt-1 bg-black text-white text-xs py-1 px-2 rounded-lg">
          Create Ad
        </div>
      )}
          </a>
          <a href="/signup" target="_blank" rel="noopener noreferrer">
            <UserPenIcon size={24} strokeWidth={1.5} color="black" />
            {hover && (
        <div className="absolute mt-1 bg-black text-white text-xs py-1 px-2 rounded-lg">
          SignUp
        </div>
      )}
          </a>
        </div>
      </nav>
    </div>
  );
};


export default Navbar;
