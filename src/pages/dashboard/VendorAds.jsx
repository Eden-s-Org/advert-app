import React, { useEffect, useState } from 'react';
import VendorAdvertCard from '../../components/VendorAdvertCard';
import DashNav from '../../components/DashNav';
import {  apiGetAllAdverts } from '../../services/adverts';
import { useParams } from 'react-router';


const VendorAds = () => {
  const { userId } = useParams(); // Ensure this gets the correct id
  const [vendorAdverts, setVendorAdverts] = useState([]);
  const [likes, setLikes] = useState()

  const getVendorAdverts = async () => {
    try {
      const response = await apiGetAllAdverts();
      console.log(response.data)
      setVendorAdverts(response.data)
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getVendorAdverts();
  }, [])


  return (
    <>
    <DashNav/>
      <div className=' w-[70%] ml-80 my-25 flex flex-col gap-y-6'>
      <div class="flex flex-col justify-center items-center mb-8 gap-y-2">
          <h2 class="text-blue-950">MY ADVERTS</h2>

          <h2 class="text-3xl md:text-5xl text-blue-950 font-bold">Special Adverts</h2>
          <div class="border border-blue-950 my-5 w-[10%]"></div>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden'>

          {vendorAdverts.length > 0 &&  vendorAdverts.map ((advert) => {
            return (
              <VendorAdvertCard 
              key={advert.id}
              advert={advert}
              />
            )
          })}
        </div>
        <div class="flex flex-col justify-center items-center mb-8 gap-y-2 mt-8">
          <h2 class="text-blue-950">MY ADVERTS</h2>

          <h2 class="text-3xl md:text-5xl text-blue-950 font-bold">Another Category</h2>
          <div class="border border-blue-950 my-5 w-[10%]"></div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-10 relative overflow-hidden'>
        {vendorAdverts.length > 0 &&  vendorAdverts.map ((advert) => {
            return (
              <VendorAdvertCard 
              key={advert.id}
              advert={advert}
              />
            )
          })}
        </div>
      </div>
    </>
  )
}

export default VendorAds