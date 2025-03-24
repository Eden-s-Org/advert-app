import React from 'react';
import { Mail, Phone, Twitter, Facebook, Linkedin, Instagram, CheckCircle } from "lucide-react";

const Footer = () => {
  return (
    <div>
 
 <footer className="bg-[#424f74] text-[#EBEAE6] py-10 px-6 md:px-12 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">

       
        <div>
          <h2 className="text-xl font-bold text-white">EdShop</h2>
          <p className="text-sm mt-2">Effortless Ad Management</p>
        </div>

        
        <div>
          <p className="font-semibold text-white">Popular Features</p>
          <ul className="mt-2 space-y-2 text-sm">
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#EEAA77]" />
              <span>AI Ad Optimization</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#EEAA77]" />
              <span>Performance Analytics</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#EEAA77]" />
              <span>Multi-Platform Support</span>
            </li>
            <li className="flex items-center space-x-2">
              <CheckCircle className="w-4 h-4 text-[#EEAA77]" />
              <span>Automated Bidding</span>
            </li>
          </ul>
        </div>

      
        <div>
          <p className="font-semibold text-white">Contact Us</p>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <Mail className="w-5 h-5 text-[#EEAA77]" />
            <a href="mailto:support@edshop.com" className="text-sm hover:text-[#EEAA77]">support@edshop.com</a>
          </div>
          <div className="flex items-center justify-center md:justify-start space-x-2 mt-2">
            <Phone className="w-5 h-5 text-[#EEAA77]" />
            <a href="tel:+1234567890" className="text-sm hover:text-[#EEAA77]">+1 (234) 567-890</a>
          </div>
        </div>

       
        <div>
          <p className="font-semibold text-white">Follow Us</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-2">
            <a href="#" className="hover:text-[#EEAA77]"><Twitter className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#EEAA77]"><Facebook className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#EEAA77]"><Linkedin className="w-5 h-5" /></a>
            <a href="#" className="hover:text-[#EEAA77]"><Instagram className="w-5 h-5" /></a>
          </div>
        </div>

      </div>

     
      <div className="text-center text-[#EBEAE6] text-xs mt-8">
        © 2025 EdShop. All rights reserved.
      </div>
    </footer>

    </div>
  )
}

export default Footer