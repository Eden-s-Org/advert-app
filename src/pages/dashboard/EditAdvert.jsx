import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router';

const EditAdvert = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [ad, setAd] = useState ();

    useEffect(( )=> {

    })
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = new FormData(event.target)
    }
  return (
    <div>EditAdvert</div>
  )
}

export default EditAdvert