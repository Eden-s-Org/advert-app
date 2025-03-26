import {
  EarthIcon,
  HeartIcon,
  Share2Icon,
  ShoppingCartIcon,
  StarIcon,
  ThumbsUpIcon,
} from "lucide-react";
import React from "react";
import social from "../assets/images/social.png"

const AdvertCard = () => {
  

  return (
    <div className="relative w-full flex justify-center px-4">
    <div className="flex flex-col mt-2 rounded-lg bg-white w-full max-w-3xl sm:w-[80%] md:w-[70%] lg:w-[60%] p-4 shadow-xl">
      <div className="flex flex-col h-fit">
        
        <div className="flex items-start gap-3 mt-3">
          <img src={social} alt="social" className="rounded-full w-10 h-10" />
          <div>
            <h1 className="font-bold">Product Title:</h1>
            <div className="flex items-center text-gray-600 text-sm">
              <h2>Just Now ·</h2>
              <EarthIcon className="ml-1" />
            </div>
            <p className="text-gray-500 text-sm">
              <span className="text-gray-600">Description:</span> Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </p>
          </div>
        </div>
  
       
        <div className="bg-blue-300 w-full h-60 sm:h-72 md:h-80 lg:h-96 relative flex justify-center items-center text-center">
          <span className="text-gray-900 w-[80px] h-[80px] flex justify-center items-center 
            bg-gray-200 absolute bottom-5 right-5 rounded-full drop-shadow-xl text-lg font-bold">
            GHC200
          </span>
        </div>
  
        <hr className="border-gray-300 my-4" />
  
        
        <div className="flex justify-center items-center flex-wrap gap-10 sm:gap-20 my-5 text-center">
          <div>
            <ThumbsUpIcon className="text-gray-600 mx-auto" />
            <p className="text-gray-500 text-sm">Like</p>
          </div>-
          <div>
            <Share2Icon className="text-gray-600 mx-auto" />
            <p className="text-gray-500 text-sm">Share</p>
          </div>
          <a href="adverts/adverts">
            <button className="rounded-lg px-4 py-2 bg-[#EEAA77] hover:bg-[#fac498] transition duration-300">
              <p className="text-gray-900 font-bold">View Details</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AdvertCard;
