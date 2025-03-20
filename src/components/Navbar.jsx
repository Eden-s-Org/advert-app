import React from "react";
import {
  BellIcon,
  HomeIcon,
  MegaphoneIcon,
  SearchIcon,
  UserPenIcon,
} from "lucide-react";
import myImage from "../assets/images/social.png";

const Navbar = () => {
  return (
    <div>
      <div className="flex gap-60 py-4">
        <div className="flex gap-50">
          <h1 className="text-blue-800 text-2xl">EdShop</h1>
          <div className="flex items-center justify-center rounded-full  bg-gray-200 px-4 py-2">
            <input
              type="text"
              placeholder="Search EdShop"
              className="rounded-md outline-none  w-100 bg-transparent "
            />
            <SearchIcon size={20} color="gray" />
          </div>
        </div>
        <div className="flex gap-10 px-4">
          <HomeIcon size={24} color="black" />
          <MegaphoneIcon size={24} color="black" />
          <BellIcon size={24} color="black" />
          <UserPenIcon size={24} strokeWidth={1.5} color="black" />
        </div>
      </div>
      {/* <div className="">
        <img src={myImage} alt="advert" className="brightness-50 w-full"/>
      </div> */}
    </div>
  );
};

export default Navbar;
