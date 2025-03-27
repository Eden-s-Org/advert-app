import React from "react";
import {
  BookUserIcon,
  CableIcon,
  ShirtIcon,
  SettingsIcon,
  ShieldAlertIcon,
} from "lucide-react";
import { Link } from "react-router";

const UserSidebar = () => {
  return (
    <div className="hidden lg:block fixed top-16 left-0 lg:ms-10 h-screen p-6 w-64 bg-white shadow-lg rounded-r-2xl border border-gray-200">
      <h1 className="text-xl font-bold my-4 text-gray-700">Products</h1>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <CableIcon className="w-5 h-5 text-gray-600" />
          <Link to="/adverts#electronics" className="text-gray-700">Electronics </Link>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <BookUserIcon className="w-5 h-5 text-gray-600" />
          <Link to="/adverts#homedecor" className="text-gray-700">Home Decor</Link>
        </li>
        <li className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 transition">
          <ShirtIcon className="w-5 h-5 text-gray-600" />
          <Link to="/adverts#fashion" className="text-gray-700">Fashion </Link>
        </li>
      </ul>

      <h2 className="text-xl font-bold my-4 text-gray-700">Services</h2>
      <ul className="flex flex-col gap-3">
        <li className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-700">
        <Link to="/adverts#BusinessConsulting">Business Consulting </Link>
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-700">
        <Link to="/adverts#PianoLessons">Piano Lessons </Link>
        </li>
        <li className="p-2 rounded-lg hover:bg-gray-100 transition text-gray-700">
        <Link to="/adverts#Photography">Photography </Link>
        </li>
      </ul>
      <h2 className="text-xl font-bold my-4 text-gray-700">Other</h2>
      <h2 className="text-xl font-bold my-4 flex items-center gap-3 text-gray-700">
        <SettingsIcon className="w-5 h-5 text-gray-600" />
        <span>Settings</span>
      </h2>
      <h2 className="text-xl font-bold my-4 flex items-center gap-3 text-gray-700">
        <ShieldAlertIcon className="w-5 h-5 text-gray-600" />
        <span>Security</span>
      </h2>
    </div>
  );
};

export default UserSidebar;
