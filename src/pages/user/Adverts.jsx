import { useState } from "react";
import { Menu, X } from "lucide-react";

const categories = [
  { 
    name: "Fashion", 
    products: [
      { image: "/images/fashion1.jpg", description: "Stylish summer dress", price: "₵250" },
      { image: "/images/fashion2.jpg", description: "Casual denim jacket", price: "₵320" },
      { image: "/images/fashion3.jpg", description: "Elegant evening gown", price: "₵600" },
      { image: "/images/fashion4.jpg", description: "Trendy sneakers", price: "₵400" },
      { image: "/images/fashion5.jpg", description: "Leather handbag", price: "₵500" },
      { image: "/images/fashion6.jpg", description: "Classic wristwatch", price: "₵750" }
    ]
  },
  { 
    name: "Electronics", 
    products: [
      { image: "/images/electronics1.jpg", description: "Wireless noise-canceling headphones", price: "₵850" },
      { image: "/images/electronics2.jpg", description: "Smartphone with high-resolution camera", price: "₵3200" },
      { image: "/images/electronics3.jpg", description: "4K Ultra HD Smart TV", price: "₵4800" },
      { image: "/images/electronics4.jpg", description: "Portable Bluetooth speaker", price: "₵550" },
      { image: "/images/electronics5.jpg", description: "Smartwatch with fitness tracking", price: "₵1200" },
      { image: "/images/electronics6.jpg", description: "Gaming laptop with high-end graphics", price: "₵8500" }
    ]
  },
  { 
    name: "Home Decor", 
    products: [
      { image: "/images/home1.jpg", description: "Modern minimalist lamp", price: "₵180" },
      { image: "..." },
    ]
  }
];

export default function Adverts() {
  return (
    <div className="flex flex-col h-screen">
      {/* Main Content Container */}
      <div className="flex flex-1">
        {/* Left Sidebar */}
        <div className="w-64 bg-gray-800 text-white p-4 hidden lg:block fixed h-full">
          <h2 className="text-xl font-bold">Categories</h2>
          <ul>
            {categories.map((category) => (
              <li key={category.name} className="p-4 border-b border-gray-700">{category.name}</li>
            ))}
          </ul>
        </div>
        
        {/* Main Content (No Scrollbar) */}
        <div className="flex-1 p-6 ml-64 mr-64">
          <div className="max-w-3xl w-full mx-auto">
            <h1 className="text-3xl font-bold mb-4">Explore Products</h1>
            {categories.map((category) => (
              <div key={category.name} className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
                <div className="grid grid-cols-1 gap-4">
                  {category.products.map((product, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                      <img src={product.image} alt={product.description} className="w-full h-60 object-cover rounded-lg" />
                      <p className="text-center mt-2 text-lg font-medium">{product.description}</p>
                      <p className="text-center text-red-600 font-semibold text-xl">{product.price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Right Sidebar for Sponsors (Fixed, Scrollable) */}
        <div className="w-64 bg-gray-200 p-4 hidden lg:block fixed right-0 h-full overflow-y-auto">
          <h2 className="text-xl font-bold mb-4">Sponsors</h2>
          <p className="text-gray-700">Advertise your brand here!</p>
        </div>
      </div>
    </div>
  );
}
