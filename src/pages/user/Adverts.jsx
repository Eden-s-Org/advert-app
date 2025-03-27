import { useEffect, useState } from "react";
import { apiGetAllAdverts } from "../../services/adverts";
import Navbar from "../../components/Navbar";
import AdvertCard from "../../components/AdvertCard";
import UserSidebar from "../../components/UserSidebar";
import SponserSidebar from "../../components/SponserSidebar";
import { useLocation } from "react-router";

export default function Adverts() {

  const fetchAds = async () => {
    
    try {
      const response = await apiGetAllAdverts();
      fetchAds(response.data.advert);
    } catch (error) {
      console.log(error);
    } 
  };

  useEffect(() => {
    fetchAds();
  }, []);

  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <>
      <Navbar />
      <div className="flex w-[100%]">
        <div className="bg-gray-200 w-[20%]">
          <UserSidebar />
        </div>
        <div className="bg-blue-500 w-[60%]">
          <div className="flex flex-col justify-center items-center bg-gray-200 mt-18">
            <h1 className="my-4 text-3xl font-bold text-gray-800 border-2 border-gray-500 p-2 rounded-lg">
              Explore Products
            </h1>

            <div className="w-[100%]">
              <section>
                <div id="electronics">
                  <h1 className="text-center my-4 text-3xl font-semibold text-gray-700 ">
                    Electronics
                  </h1>
                </div>
                <AdvertCard />
              </section>

              <section>
                <div id="homedecor">
                  <h1 className="text-center my-4 text-3xl font-semibold text-gray-700">
                    Home Decor
                  </h1>
                </div>
                <AdvertCard />
              </section>

              <section id="fashion">
                <div>
                  <h1 className="text-center my-4 text-3xl font-semibold text-gray-700">
                    Fashion
                  </h1>
                </div>
                <AdvertCard />
              </section>

              <section id="BusinessConsulting">
                <div>
                  <h1 className="text-center my-4 text-3xl font-semibold text-gray-700">
                    Business Consulting
                  </h1>
                </div>
                <AdvertCard />
              </section>

              <section id="PianoLessons">
                <div>
                  <h1 className="text-center my-4 text-3xl font-semibold text-gray-700">
                    Piano Lessons
                  </h1>
                </div>
                <AdvertCard />
              </section>

              <section id="Photography">
                <div>
                  <h1 className="text-center my-4 text-3xl font-semibold text-gray-700">
                    Photography
                  </h1>
                </div>
                <AdvertCard />
              </section>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 w-[20%] mt-17">
          <SponserSidebar />
        </div>
      </div>
    </>
  );
}
