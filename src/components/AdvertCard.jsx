import {
  EarthIcon,
  HeartIcon,
  Link,
  Share2Icon,
  ShoppingCartIcon,
  StarIcon,
  ThumbsUpIcon,
} from "lucide-react";
import React from "react";
import social from "../assets/images/social.png"
import iphone from "../assets/images/iphone.png"

const AdvertCard = ({ advert }) => {
  

  return (
    <div className="flex justify-center px-4">
    <div className="flex flex-col mt-6 rounded-lg bg-white w-full max-w-3xl sm:w-[80%] md:w-[70%] lg:w-[60%] p-6 shadow-lg border border-gray-300">
      <div className="flex flex-col h-fit">
        <div className="flex items-start gap-4 mt-3">
          <img src={social} alt="social" className="rounded-full w-12 h-12 border-gray-300 p-1" />
          <div className="border-gray-300 p-2 rounded-lg shadow-sm">
            <h1 className="font-bold text-lg">{advert?.title}</h1>
            <div className="flex items-center text-gray-600 text-sm">
              <span>Just Now ·</span>
              <EarthIcon className="ml-1 w-4 h-4 text-gray-500" />
            </div>
          </div>
        </div>

        <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 flex justify-center items-center relative mt-4">
          <img src={`https://res.cloudinary.com/dkvumu6xd/image/upload/${advert?.media}`} alt={advert?.title} className="h-full object-cover rounded-lg shadow-md" />
          <span className="absolute bottom-5 right-5 bg-gray-800 text-white text-lg font-bold py-2 px-4 rounded-full shadow-lg">
            GHC200
          </span>
        </div>

        <hr className="border-gray-300 my-4" />

        <div className="flex justify-center items-center flex-wrap gap-6 sm:gap-10 my-4 text-center">
          <div className="hover:text-blue-500 cursor-pointer transition duration-300">
            <ThumbsUpIcon className="text-gray-600 mx-auto w-6 h-6" />
            <p className="text-gray-500 text-sm">Like</p>
          </div>
          <div className="hover:text-green-500 cursor-pointer transition duration-300">
            <Share2Icon className="text-gray-600 mx-auto w-6 h-6" />
            <p className="text-gray-500 text-sm">Share</p>
          </div>
          <a href="/adverts/:id">
            <button className="px-4 py-2 bg-[#EEAA77] hover:bg-orange-400 text-white font-bold rounded-lg transition duration-300 shadow-md">
            View Details
          </button>
          </a>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AdvertCard;
