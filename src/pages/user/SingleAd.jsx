import React, { useEffect, useState } from "react";
import fan from "../../assets/images/fan.png";
import { useParams } from "react-router";
import { apiGetSingleAdvert } from "../../services/adverts";

const SingleAd = () => {
  const { id } = useParams();
  const [ad, setAd]  = useState({});

  const getAd = async () => {
    try {
      const response = await apiGetSingleAdvert(id);
      console.log(response.data);
    }catch (error){
      console.log(error);
    } 
  };

  useEffect(() => {
    getAd();
  },[]);

  return (
    <div>
  <div className="flex flex-row justify-center mt-17 p-8 bg-gray-100 rounded-lg shadow-md">
    <div>
      <img src={fan} alt="fan" className="h-80 w-80 object-cover rounded-md" />
    </div>

    <div className="flex flex-col justify-center h-full w-auto ml-10">
      <h1 className="text-2xl font-bold text-gray-800">Product Name :</h1>
      <h1 className="text-2xl font-semibold text-gray-700">Vendor's Name :</h1>
      <h2 className="text-xl font-medium text-gray-600">Price: GHC2000</h2>
      <p className="text-lg text-gray-600">
        Description: Lorem ipsum dolor sit, amet consectetur adipisicing elit.
      </p>
      <p className="text-lg text-gray-600">Location: Accra</p>

      <div className="flex gap-8 py-6">
        <a href="adverts" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#EBEAE6] text-gray-900 py-4 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-gray-300">
            ADD TO CART
          </button>
        </a>
        <a href="create-ad" target="_blank" rel="noopener noreferrer">
          <button className="bg-[#424f74] text-white py-4 px-8 rounded-lg text-lg font-bold shadow-md hover:bg-[#2c3b5a]">
            BUY
          </button>
        </a>
      </div>
    </div>
  </div>
</div>


  );
};

export default SingleAd;
// {/* {`/adverts/${ad.id}`} */}