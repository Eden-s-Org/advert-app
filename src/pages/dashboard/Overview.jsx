import React from 'react'
import Sidebar from '../../components/Sidebar'
import Image from '../../assets/images/social.png'
import { CalendarClock, Camera, ChevronDown, CircleFadingPlus, Clapperboard, CopyPlus, Facebook, InstagramIcon} from 'lucide-react'
import { Link } from 'react-router'

const Overview = () => {
  return (
    <>
      <div className='w-[10%] bg-gray-300'>
        <Sidebar />
      </div>
      <div className='w-[82.4%] bg-gray-300 ml-auto'>
        <div className='w-[85%] mx-auto'>
          <div className='h-55 rounded-b-lg bg-[url(assets/images/cover-image.png)] bg-cover bg-gray-100 relative '>
            
            <div className='h-22 w-22 border-6 border-white rounded-full absolute top-50 left-5 z-0 bg-[url(assets/images/social.png)] bg-cover shadow-lg shadow-gray-400'>
              {/* <img src='#' alt="" className='items-center ' /> */}
            </div>
            <div className='flex justify-center items-center gap-x-2 w-[16%] absolute right-5 bottom-5 cursor-pointer'>
              <Camera/>
              <h2>Edit cover photo</h2>
            </div>
          </div>
          <div className='ml-32 flex flex-col gap-y-1 my-1'>
              <h1 className='text-xl font-bold'>Youshareledge</h1>
            <div className='flex items-center gap-x-2'>
              <div className='flex items-center gap-x-1'>
                <div className='h-6 w-6 bg-[#EEAA77] flex items-center justify-center rounded-full'>
                <Facebook size={15} className='text-white/70'/>
                </div>
                <span className='text-md'>@Youshareledge</span>
              </div>
              <div className='h-5 border border-gray-400'> </div>
              <div className='flex items-center gap-x-1'>
                <div className='h-6 w-6 bg-white flex items-center justify-center rounded-full'>
                <InstagramIcon size={20} className='text-red-600'/>
                </div>
                <span className='text-md'>@youshareledge</span>
              </div>
            </div>
          </div>
          <div className='flex justify-center items-center gap-x-2 my-10'>
            <Link to={'create-ad'} className='w-2/5 flex items-center justify-center gap-x-2 bg-[#EEAA77] p-2 rounded-md cursor-pointer hover:bg-blue-800'>
              <CopyPlus className='size-5 text-white'/>
              <h3 className='text-white font-bold '>Create advert</h3>
            </Link>
            <div className='w-1/5   bg-transparent border border-gray-500  rounded-md cursor-pointer hover:bg-gray-400'>
            <Link to={'to-do'} className='flex items-center justify-center gap-x-2 p-2'>
              <Clapperboard className='size-5 text-black'/>
              <h3 className='text-black/90 text-sm'>To-Do List</h3>
            </Link>
            </div>
            <div className='w-1/5 flex items-center justify-center gap-x-2 bg-transparent border border-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-400'>
              <CircleFadingPlus className='size-5 text-black'/>
              <h3 className='text-black/90 text-sm'>Create story</h3>
            </div>
            <div className='w-1/5 flex items-center justify-center gap-x-2 bg-transparent border border-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-400'>
              <CalendarClock className='size-5 text-black'/>
              <h3 className='text-black/90 text-sm'>Schedule advert</h3>
            </div>
            <div className='w-1/10 flex items-center justify-center gap-x-2 bg-transparent border border-gray-500 p-2 rounded-md cursor-pointer hover:bg-gray-400'>
              <h3 className='text-black/90 text-sm'>More</h3>
              <ChevronDown className='size-5 text-black'/>
            </div>
            
          </div>
          <div className='bg-white h-20 rounded-lg '>

          <h1 className=' font-bold p-10'>To-do list </h1>
          <h1>Check unread messages, comments and other things that may require your attention.</h1>
          </div>
        </div>
      </div>
    </>
  )
}

export default Overview