import { ArrowLeft, Star, X } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'
import Navbar from './Navbar'
import { apiDeleteAdvert } from '../services/adverts'

const SingleAdvertCard = ({advert, onDelete}) => {
    console.log(advert)
// Function to handle delete
const handleDelete = async () => {
    const confirmDelete = window.confirm(`Are you sure you want to delete "${advert?.title}"?`);
    if (confirmDelete) {
        try {
            await apiDeleteAdvert(advert?.id);
            alert("Advert deleted successfully!");
            if (onDelete) {
                onDelete(advert?.id); // Update parent state after deletion
            }
        } catch (error) {
            console.error("Error deleting advert:", error);
            alert("Failed to delete advert. Please try again.");
        }
    }
};

  return (
    <>
    <Navbar/>
            <div className="h-screen flex flex-col justify-center">
                <div class="bg-gray-200 grid grid-cols-1 md:grid-cols-2 md:mt-8 mx-auto ml-100 w-[60%] shadow-lg shadow-blue-950 rounded-2xl justify-center relative overflow-hidden">
                    <div className="flex flex-col justify-evenly rounded-s-2xl w-[80%] mx-auto">
                        <Link to={'/dashboard/ads'} className="bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90%  p-3 rounded-full shadow-lg w-10 h-10 text-lg hover:bg-gradient-to-l text-white hover:font-extrabold absolute top-5 left-3">
                            <ArrowLeft className="text-white" />
                        </Link>
                        {/* <img src={Image} alt={title} className="rouded-xl" /> */}
                        <img src={`https://res.cloudinary.com/dkvumu6xd/image/upload/${advert?.media}`} alt={advert?.title} className='w-[100%] h-80 hover:scale-105' />
                    </div>
                    <div class="flex flex-col justify-evenly">
                        <Link to={'ads'} className="bg-blue-950/50  p-3 rounded-full shadow-lg w-10 h-10 text-lg hover:bg-blue-950 text-white hover:font-extrabold absolute top-5 left-163 md:left-290">
                            <X className="text-white" />
                        </Link>
                        <h2 class="text-2xl md:text-5xl/20 font-bold text-blue-950 mt-7 ">{advert?.title}</h2>

                       
                        
                        <p className=''><span className='text-blue-950 font-semibold text-sm md:text-md'>Category:</span> <span className='text-blue-950'>{advert?.category}</span></p>
                        <div className="flex justify-start items-center leading-10 mb-4">
                            <Star className='text-blue-950' />
                            <Star className='text-blue-950' />
                            <Star className='text-blue-950' />
                            <Star className='text-gray-400' />
                            <div className="text-blue-950 ml-5 font-semibold">3.8 Ratings</div>
                        </div>

                        <div >
                            <h2 class="text-blue-950 mx-auto md:mx-2 font-bold">Ghc {advert.price}</h2>
                        </div>

                        <div class="mb-5 w-[90%] text-blue-950">
                           {advert?.description}
                        </div>

                        <div className="flex justify-end items-center mt-5 w-[90%] gap-5 relative">

                            <div class=" flex">
                                <Link to={`/dashboard/edit/${advert.id}`}
                                    class="items-end bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold ml-auto mb-5">Edit</Link>
                            </div>

                            <div class=" flex ">
                                <button onClick={handleDelete} to={'/dashboard/ads'}
                                    class=" bg-red-600/60 hover:bg-red-600 px-7 py-3 rounded-lg text-white text-center hover:font-extrabold ml-auto mb-5">Delete</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
  )
}

export default SingleAdvertCard