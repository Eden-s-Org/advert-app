import React from "react";
import {
  HomeIcon,
  MegaphoneIcon,
  SearchIcon,
  ShoppingCartIcon,
  UserPenIcon,
} from "lucide-react";

const Navbar = () => {
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

        <div className="flex gap-6">
          <a href="/" target="_blank" rel="noopener noreferrer">
            <HomeIcon size={24} color="black" />
          </a>
          <a href="/adverts" target="_blank" rel="noopener noreferrer">
            <MegaphoneIcon size={24} color="black" />
          </a>
          <a href="/" target="_blank" rel="noopener noreferrer">
            <ShoppingCartIcon size={24} color="black" />
          </a>
          <a href="/signup" target="_blank" rel="noopener noreferrer">
            <UserPenIcon size={24} strokeWidth={1.5} color="black" />
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
