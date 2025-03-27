import React from 'react';
import social from "../assets/images/social.png"

const SponserSidebar = () => {
  return (
    <div className="fixed lg:block px-4 py-6 w-full lg:w-72 bg-white shadow-md rounded-xl border border-gray-200">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">Sponsors</h2>
      
      <div className="space-y-6">
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
          <img src={social} alt="MEST" className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow" />
          <h2 className="font-bold text-lg sm:text-xl text-gray-700">MEST</h2>
        </div>
        
        <div className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-100 transition">
          <img src={social} alt="Generation Ghana" className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg shadow" />
          <h2 className="font-bold text-lg sm:text-xl text-gray-700">Generation Ghana</h2>
        </div>
      </div>

      <p className="text-gray-600 mt-6 text-sm">Advertise your brand here!</p>
    </div>
  
  )
}

export default SponserSidebar;