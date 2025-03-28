import React from "react";
import K from "../constants";
import { Link, NavLink } from "react-router";

const Sidebar = () => {
  return (
    <div className="flex flex-col w-60 gap-6 z-50 bg-[#EEAA77] h-screen px-2 py-5 fixed left-0 top-0">
      <span className=" text-4xl font-extrabold tracking-wide text-white flex justify-center font-mono"> 
  Ed<span className="text-blue-950 italic">Shop</span>
</span>
      <div className="flex flex-col gap-y-6">
        {K.NAVLINKS.map((link, index) => {
          return (
            <NavLink
              key={index}
              to={link.path}
              className={({ isActive }) =>
                `text-white hover:bg-white hover:text-black px-3 py-2 w-full rounded-md flex gap-x-2 items-center ${
                  isActive && "bg-white !text-black"
                }`
              }
              title={link.name}
              end
            >
              <link.icon />
              <span>{link.name}</span>
            </NavLink>
          );
        })}
      </div>
      <Link to={'/'} className="text-blue-950 bg-white hover:bg-[#424f74] hover:text-white px-3 py-2 w-full rounded-md flex justify-center">Logout</Link>
    </div>
  );
};

export default Sidebar;
