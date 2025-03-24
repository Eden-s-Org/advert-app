import React from "react";
import {
  BellIcon,
  HomeIcon,
  MegaphoneIcon,
  SearchIcon,
  UserPenIcon,
} from "lucide-react";


const Navbar = () => {
  return (
    <div className="">
    <nav className="top-0 left-0 w-full flex items-center justify-between bg-white shadow-md px-6 py-4">

  <h1 className="text-[#424f74] text-2xl font-extrabold">EdShop</h1>

 
  <div className="flex items-center bg-gray-200 rounded-full px-4 py-2 w-1/3">
    <input
      type="text"
      placeholder="Search EdShop"
      className="w-full bg-transparent outline-none px-2"
    />
    <SearchIcon size={20} color="gray" />
  </div>

 
  <div className="flex gap-6">
    <a href="/" target="_blank" rel="noopener noreferrer">
      <HomeIcon size={24} color="black" />
    </a>
    <a href="/adverts" target="_blank" rel="noopener noreferrer">
      <MegaphoneIcon size={24} color="black" />
    </a>
    <a href="/" target="_blank" rel="noopener noreferrer">
      <BellIcon size={24} color="black" />
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
