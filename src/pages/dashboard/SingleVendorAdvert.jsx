import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { apiGetSingleAdvert } from '../../services/adverts';
import Sidebar from '../../components/Sidebar';

const SingleVendorAdvert = () => {


    
  return (
    <>
    <Sidebar/>
    <div>SingleVendorAdvert</div>
    </>
  )
}

export default SingleVendorAdvert