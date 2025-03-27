import React, { useState } from "react";
import {
  FolderKanbanIcon,
  HomeIcon,
  MegaphoneIcon,
  ViewIcon,
  SearchIcon,
  
} from "lucide-react";

const Navbar = () => {

  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <div>
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

        <div className="flex gap-6 relative">
          
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredItem("home")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="/" target="" rel="">
              <HomeIcon size={24} color="black" />
            </a>
            {hoveredItem === "home" && (
              <span className="absolute top-8 bg-black text-white text-xs py-1 px-2 rounded-lg">
                Home
              </span>
            )}
          </div>

       
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredItem("adverts")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="/signup" target="" rel="">
              <MegaphoneIcon size={24} color="black" />
            </a>
            {hoveredItem === "adverts" && (
              <span className="absolute top-8 bg-black text-white text-xs py-1 px-2 rounded-lg">
                Adverts
              </span>
            )}
          </div>

         
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredItem("folder")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="/signup" target="_blank" rel="noopener noreferrer">
              <FolderKanbanIcon size={24} color="black" />
            </a>
            {hoveredItem === "folder" && (
              <span className="absolute top-8 bg-black text-white text-xs py-1 px-2 rounded-lg">
                Create Your Ad
              </span>
            )}
          </div>

        
          <div
            className="relative flex flex-col items-center"
            onMouseEnter={() => setHoveredItem("signup")}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <a href="/signup" target="_blank" rel="noopener noreferrer">
              <ViewIcon size={24} strokeWidth={1.5} color="black" />
            </a>
            {hoveredItem === "signup" && (
              <span className="absolute top-8 bg-black text-white text-xs py-1 px-2 rounded-lg">
               View All Adds
              </span>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
