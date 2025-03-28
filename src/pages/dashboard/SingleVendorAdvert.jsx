import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiGetSingleAdvert } from '../../services/adverts';
import SingleAdvertCard from '../../components/SingleAdvertCard';

const SingleVendorAdvert = () => {
  const { id } = useParams(); // Ensure this gets the correct id
  const [advert, setAdvert] = useState(null);

  useEffect(() => {
    const getadvert = async () => {
      try {
        if (!id) {
          console.error("advert ID is missing");
          return;
        }
        const response = await apiGetSingleAdvert(id);
        
        setAdvert(response.data.ad);
      } catch (error) {
        console.error("Error fetching advert details:", error);
      }
    };

    getadvert();
  }, [id]);

  if (!advert) return <p>Loading advert details...</p>;
  console.log(advert)

  return (
    <>
   <section className="mt-20 bg-blue-100 h-screen">
                <SingleAdvertCard
                key={advert.id}
                advert={advert}

                />
      </section>
    </>
  )
}

export default SingleVendorAdvert