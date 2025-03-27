import React, { useEffect, useState } from 'react'

const DashNav = () => {
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 55) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
      <div className={` z-20 flex flex-row flex-wrap items-center px-5 fixed top-0 left-0 w-[100%] ml-60 justify-between py-5 transition-all duration-300  ${
        scrolling ? "bg-white shadow-md" : "bg-gray-200 shadow-none"
      }`}>
      <h2 className="font-bold">Create Advert</h2> 
      </div>
    
  )
}

export default DashNav;