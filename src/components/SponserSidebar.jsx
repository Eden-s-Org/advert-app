import React from 'react';
import social from "../assets/images/social.png"

const SponserSidebar = () => {
  return (
    <div className="fixed lg:block px-3 w-full lg:w-auto">
    <div className="mt-10">
      <h2 className="text-xl font-bold mb-4">Sponsors</h2>
  
      <div className="space-y-6">
       
        <div className="flex items-center gap-3">
          <img src={social} alt="social" className="w-16 h-16 sm:w-20 sm:h-20" />
          <h2 className="font-bold text-lg sm:text-xl">MEST</h2>
        </div>
  
    
        <div className="flex items-center gap-3">
          <img src={social} alt="social" className="w-16 h-16 sm:w-20 sm:h-20" />
          <h2 className="font-bold text-lg sm:text-xl">Generation Ghana</h2>
        </div>
      </div>
  
      <p className="text-gray-700 mt-4">Advertise your brand here!</p>
    </div>
  </div>
  
  )
}

export default SponserSidebar;