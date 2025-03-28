import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiGetSingleAdvert } from '../../services/adverts';
import Sidebar from '../../components/Sidebar';

const SingleVendorAdvert = () => {
//     const { id} =useParams();

//     const [advert, setAdvert] = useState({})

//     const getAdvert = async () => {
//         try {
//             const response = await apiGetSingleAdvert(id);
// setAdvert(response.data);
//         } catch (error) {
//             console.log(error)
//         }
//     }

//     useEffect(() => {
//         getAdvert(); 
//     }, []);
  return (
    <>
    <Sidebar/>
    <div>SingleVendorAdvert</div>
    </>
  )
}

export default SingleVendorAdvert