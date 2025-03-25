import React from "react";
import {BookUserIcon, CableIcon, ShirtIcon,SettingsIcon, ShieldAlertIcon,
  
} from "lucide-react";


const UserSidebar = () => {
  return (
    <div className="hidden lg:block fixed top-16 left-0 lg:ms-10 h-screen p-4 w-64 bg-gray-200 shadow-md">
    <h2 className="text-xl font-bold my-6">Products</h2>
    <ul className="flex flex-col gap-4">
      <li className="flex items-center gap-2">
        <CableIcon />
        <span>Electronics</span>
      </li>
      <li className="flex items-center gap-2">
        <BookUserIcon />
        <span>Home Decor</span>
      </li>
      <li className="flex items-center gap-2">
        <ShirtIcon />
        <span>Fashion</span>
      </li>
    </ul>
  
    <h2 className="text-xl font-bold my-6">Services</h2>
    <ul className="flex flex-col gap-4">
      <li>Business Consulting</li>
      <li>Cleaning</li>
      <li>Photography</li>
    </ul>
  
    <h2 className="text-xl font-bold my-6 flex items-center gap-2">
      <SettingsIcon />
      <span>Settings</span>
    </h2>
    <h2 className="text-xl font-bold my-6 flex items-center gap-2">
      <ShieldAlertIcon />
      <span>Security</span>
    </h2>
  </div>
  
  );
};

export default UserSidebar;
