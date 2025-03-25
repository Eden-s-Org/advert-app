import { ChevronDown, ImagePlusIcon, MonitorDot, Smartphone, SmilePlusIcon, Youtube, YoutubeIcon } from 'lucide-react'
import React, { useState } from 'react'

const CreateAd = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // const handleFileUpload = () => {
  //   document.getElementById("advertVideo").click();
  // };

  return (
    <div className='w-[82.2%] ml-60 flex gap-x-6 justify-center bg-gray-200'>
      <section className='w-[75%] bg-gray-200 ml-5 flex flex-col justify-center gap-y-5'>
        {/* Post to section */}
        <div className='bg-white rounded-lg flex flex-col justify-center gap-y-3 mt-5 py-3'>
          <div className='w-[95%] mx-auto'>
            <h1 className='font-bold '>Post to</h1>
          </div>

          <div className=' bg-red-400 w-[95%] mx-auto flex border p-2 rounded-md items-center'>
            <div className='bg-gray-500 w-8 h-8 border rounded-full mr-2'></div>
            <h1 className='font-bold '>Post to</h1>
          </div>

        </div>

        <form action="" method="post" className='flex flex-col gap-y-5'>

          {/* Add Media goes here */}
          <div className='bg-white rounded-lg flex flex-col justify-center gap-y-3 py-3'>
            <div className='w-[95%] mx-auto'>
              <h1 className='font-bold '>Media</h1>
              <p>Share photo or a video of your advert. EdAdvert App posts can't exceed 10 photos.</p>
            </div>

            <div className=' bg-red-400 w-[95%] mx-auto flex p-2 items-center gap-4'>
              <div className='border border-gray-500 py-2 px-3 rounded-md'>

                <label htmlFor='advertImage' className='flex gap-x-2 items-center hover:cursor-pointer'>
                  <ImagePlusIcon htmlFor='advertImage' size={20} strokeWidth={2} className='text-black' />
                  Add photo
                </label>
                <input type="file" name="image" id="advertImage" className='' accept='image/*' required/>
              </div>

              <div className='border border-gray-500 py-2 px-2 rounded-md'>
                <label htmlFor='advertVideo' className='flex gap-x-2 items-center hover:cursor-pointer'>
                  <YoutubeIcon htmlFor='advertVideo' size={24} strokeWidth={2} className='text-black' />
                  Add video
                </label>
                <input type="file" name="image" id="advertVideo" title='Add video' accept='video/*' />
              </div>

            </div>
          </div>

          <div className='bg-white rounded-lg flex flex-col justify-center gap-y-3 py-3'>
            <div className='w-[95%] mx-auto'>
              <h1 className='font-bold '>Post details</h1>
              <p>Share photo or a video of your advert. EdAdvert App posts can't exceed 10 photos.</p>
            </div>


            <div className=' w-[95%] mx-auto flex flex-col gap-5'>
              <div className='w-[100%] mx-auto flex flex-col gap-2 '>
                <label htmlFor="titleInput" className='font-semibold'>Title</label>
                <input type="text" name="title" id="titleInput" title='Tile' placeholder='Enter title of your advert' className='border border-gray-400 p-2 rounded-lg' required/>
              </div>
              <div className='w-[100%] mx-auto flex flex-col gap-2'>
                <label htmlFor="categoryInput" className='font-semibold'>Category</label>
                <select name="category" id="categoryInput" placeholder='Select category' title='select category' required className='border border-gray-400 p-2 rounded-lg'>

                  <option value="" selected disabled className='text-gray-300 font'>Select category</option>
                  <option value="products">Products</option>
                  <option value="services">Services</option>
                </select>
              </div>
              <div className='w-[100%] mx-auto flex flex-col gap-2'>
                <label htmlFor="priceInput" className='font-semibold'>Price (cedis)</label>
                <input type="number" name="price" id="priceInput" placeholder='How much is it going for?' className='border border-gray-400 p-2 rounded-lg' title='Price' required/>
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor='description' className='font-semibold'>
                  Description
                </label>
                <textarea type="text" name="description" id="description" required className='w-[100%] bg-white px-2 py-1 pb-15 border-1 border-gray-400 rounded-lg' placeholder='Type here!' title='Description' ></textarea>
              </div>

              <div className='flex gap-x-5'>
                <span className='ml-2'>
                  <SmilePlusIcon className='hover:text-amber-400 hover:duration-200 hover:ease-in hover:scale-120' />
                </span>
                <span className=''>
                  <SmilePlusIcon className='hover:text-amber-400 hover:duration-200 hover:ease-in hover:scale-120' />
                </span>
                <span className=''>
                  <SmilePlusIcon className='hover:text-amber-400 hover:duration-200 hover:ease-in hover:scale-120' />
                </span>

              </div>

            </div>
          </div>

          <div className='w-[79.5%] fixed bg-white rounded-md p-3 bottom-3 z-10 flex justify-end gap-x-3'>
          <button className=" bg-transparent  px-2 py-2 rounded-md text-black/70 text-center border border-gray-400 hover:bg-gray-200" disabled>Finish Later</button>
            <button type="submit" className=" bg-[#424f74] hover:bg-blue-950 px-5 py-2 rounded-md text-white text-center font-bold cursor-pointer">Publish to EdenAdverts</button>
          </div>
        </form>

        <div className='bg-white rounded-lg flex flex-col justify-center gap-y-3 mb-3 py-3'>
          <div className='w-[95%] mx-auto'>
            <h1 className='font-bold '>Advert settings</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quasi.</p>
          </div>

          <div className='flex flex-col mx-auto gap-y-4 w-[98%]'>
            <label className='flex items-start gap-x-1 hover:bg-gray-300 hover:rounded-lg'>
              <div className='p-2'>
                <input type="radio" name="option1" value="option1" className='h-4 w-4' />
              </div>
              <div className=' '>
                <span className='text-md'>Public </span> <p className='leading-4 text-sm opacity-80'>Lorem ipsum dolor sit amet.</p>
              </div>
            </label>
            <label className='flex justify-items-start items-start gap-x-1 transition-none hover:bg-gray-300 hover:rounded-lg'>
              <div className='p-2'>
                <input type="radio" name="option1" value="option2" className='h-4 w-4' />
              </div>

              <div className=' '>
                <span className='text-md'>Private </span> <p className='leading-4 text-sm opacity-80'>Lorem ipsum dolor sit amet.</p>
              </div>
            </label>
          </div>
         
        </div>

        <div className='w-[90%] relative  bg-gray-200 rounded-md p-2 bottom-3'>
            {/* <button type="submit" className=" bg-gradient-to-r from-[#424f74] from-50% to-[#EEAA77] to-90% hover:bg-gradient-to-l px-5 py-2 rounded-lg text-white text-center hover:font-extrabold ">Publish</button> */}
            <p className='text-white'>dsfhkj Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, enim.</p>
            <p className='text-white'>dsfhkj Lorem, ipsum dolor sit amet consectetur adipisicing elit. Recusandae, enim.</p>
          </div>
      </section>

      {/* SideSection */}
      <section className='w-[40%] bg-red-200 mr-4.5 '>
        <div className='fixed bg-gray-200 mt-4'>
<div className='flex justify-center'>
<div className='flex border border-gray-400 bg-white p-2 rounded-md hover:bg-gray-300 cursor-default'>
            <p>EdenAds Feed preview </p>
            <ChevronDown/>
          </div>

          <div className='flex items-end border border-gray-400 rounded-md px-2'>
            <MonitorDot className='text-black/60'/>
            <div className='border border-gray-400 h-6.5 '></div>
            <Smartphone className='text-black/60'/>
          </div>
</div>

          
          
          <div>
            <h1>Post here</h1>
          </div>

        </div>
      </section>
    </div>
  );
};

export default CreateAd