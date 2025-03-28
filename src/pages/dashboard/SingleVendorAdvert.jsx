import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Sidebar from "../../components/Sidebar";


    const [advert, setAdvert] = useState(null)

    const getAdvert = async () => {
        try {
            const response = await apiGetSingleAdvert();
setAdvert(response.data.advert);
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <>
      <Sidebar />
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-2xl mx-auto bg-white rounded shadow p-6">
          <img
            src={advert.image}
            alt={advert.title}
            className="w-full h-64 object-cover rounded mb-4"
          />
          <h2 id="advert-title" className="text-2xl font-bold mb-2">
            {advert.title}
          </h2>
          <p className="text-gray-700 mb-2">{advert.description}</p>
          <p className="text-lg text-blue-500 font-bold">${advert.price}</p>
          <p className="text-sm text-gray-400">Category: {advert.category}</p>
        </div>
      </div>
    </>
  );
}
