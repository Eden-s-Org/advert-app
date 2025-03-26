import { useEffect, useState } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import Navbar from "../../components/Navbar";
import AdvertCard from "../../components/AdvertCard";
import UserSidebar from "../../components/UserSidebar";
import SponserSidebar from "../../components/SponserSidebar";

export default function Adverts() {
  const [isLoading, setIsLoading] = useState(false);

  const fetchAds = async () => {
    setIsLoading(true);
    try {
      const res = await apiGetAllAdverts();
      console.log(res);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchAds();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex w-[100%]  ">
        <div className="bg-gray-200 w-[20%]">
          <UserSidebar />
        </div>
        <div className="bg-blue-500 w-[60%]">
          <div className="flex flex-col justify-center items-center bg-gray-200 mt-18">
          <h1 className="my-4 text-3xl">Explore Products</h1>
            <div className=" w-[100%]">
              <AdvertCard />
              <AdvertCard />
              <AdvertCard />
              
        
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-[20%] mt-17">
        <SponserSidebar/>
        </div>
      </div>
    </>
  );
}
