import React from "react";
import fan from "../../assets/images/fan.png";

const SingleAd = () => {
  return (
    <div>
      <div className="flex flex-row justify-center mt-17">
        <div>
          <img src={fan} alt="fan" className="h-100 w-100" />
        </div>

        <div className="flex flex-col justify-center h-100 w-100">
          <h1>Product Name :</h1>
          <h1>Vendor's Name :</h1>
          <h2 className="">Price: GHC2000</h2>
          <p>
            Description: Lorem ipsum dolor sit, amet consectetur adipisicing
            elit.
          </p>
          <p>Location:Accra</p>
          <div className="flex  gap-10 py-6">
        <a href="adverts" target="_blank" rel="noopener noreferrer">
          {" "}
          <button className="bg-[#EBEAE6] py-3 px-6 rounded-e-lg font-bold">
            ADD TO CART
          </button>
        </a>
        <a href="create-ad" target="_blank" rel="noopener noreferrer">
          {" "}
          <button className="bg-[#424f74] text-black py-3 px-6 rounded-e-lg font-bold">
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
