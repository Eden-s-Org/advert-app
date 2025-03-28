import { EarthIcon, MessageCircle, Share2, ThumbsUp } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const VendorAdvertCard = () => {
    return (
        <>
        
            <div className='bg-gray-100 shadow-xl rounded-xl  py-4 flex flex-col gap-y-3 hover:scale-105 transition-transform hover:shadow-xl hover:shodow-blue-950 overflow-hidden'>
                <div className='flex items-center gap-x-3 w-[95%] mx-auto '>
                    <div className='h-15 w-15 rounded-full bg-[#EEAA77]'>
                        {/* <h1>Profile Image</h1> */}
                    </div>
                    <div>
                        <h2 className='font-bold text-[#424f74]'>YoushareLedge</h2>
                        <span className='flex items-center gap-x-2'>
                            <h3 className='text-[#424f74]'>Just now .</h3>
                            <EarthIcon className='h-4 w-4 text-gray-500' />
                        </span>
                    </div>
                </div>
                <div className='w-[90%] mx-auto h-fit'>
                    <h2 className='text-lg font-bold text-[#424f74]'>Learn Piano with Emmanuel</h2>
                    <p className='text-[#424f74]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et, officia. Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio, tempora.</p>
                </div>

                <div className='w-[100%] bg-gray-500 relative '>
                    <img src="#" alt="" className='w-[100%] h-80 hover:scale-105' /> 
                    <div className='h-20 w-20 rounded-full bg-red-700/90 border-4 border-white absolute bottom-8 right-8 flex justify-center items-center'>
                        <p className='text-[#EEAA77] text-center font-bold text-lg'>Ghc <br/> 500</p>
                    </div>
                </div>
                <div className='flex justify-around'>
                    <span className='flex gap-x-2 items-center p-2 hover:bg-gray-300 hover:rounded-md'>
                    <ThumbsUp className='text-gray-600 h-5 w-5'/> 
                    <p className='text-lg text-gray-700'>Like</p>
                    </span>
                    <span className='flex gap-x-2 items-center p-2 hover:bg-gray-300 hover:rounded-md'>
                    <MessageCircle className='text-gray-600 h-5 w-5'/> 
                    <p className='text-lg text-gray-700'>Comment</p>
                    </span>
                    <span className='flex gap-x-2 items-center p-2 hover:bg-gray-300 hover:rounded-md'>
                    <Share2 className='text-gray-600 h-5 w-5'/> 
                    <p className='text-lg text-gray-700'>Share</p>
                    </span>

                </div>
                <div className='flex'>
                        <Link to={`ads/`} className=" bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-5 py-2 rounded-lg text-white text-center hover:font-extrabold w-[100%]">View More Detail</Link>
                    </div>
            </div>
            
        </>
    )
}

export default VendorAdvertCard