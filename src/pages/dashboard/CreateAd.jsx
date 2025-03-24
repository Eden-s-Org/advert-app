import { ImagePlusIcon, SmilePlusIcon, Youtube, YoutubeIcon } from 'lucide-react'
import React, { useState } from 'react'

const CreateAd = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  // const handleFileUpload = () => {
  //   document.getElementById("advertVideo").click();
  // };

  return (
    <div className='w-[81%] ml-60 flex gap-x-6 justify-center'>
      <section className='w-[75%] bg-amber-200 ml-5 flex flex-col justify-center gap-y-5'>
        {/* Post to section */}
        <div className='bg-blue-300 rounded-lg flex flex-col justify-center gap-y-3 mt-5 py-3'>
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
          <div className='bg-blue-300 rounded-lg flex flex-col justify-center gap-y-3 py-3'>
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
                <input type="file" name="image" id="advertImage" className='hidden' accept='image/*' />
              </div>

              <div className='border border-gray-500 py-2 px-3 rounded-md'>
                <label htmlFor='advertVideo' className='flex gap-x-2 items-center hover:cursor-pointer'>
                  <YoutubeIcon htmlFor='advertVideo' size={24} strokeWidth={2} className='text-black' />
                  Add video
                </label>
                <input type="file" name="image" id="advertVideo" title='Add video' accept='video/*' />
              </div>

            </div>
          </div>

          <div className='bg-blue-300 rounded-lg flex flex-col justify-center gap-y-3 py-3'>
            <div className='w-[95%] mx-auto'>
              <h1 className='font-bold '>Post details</h1>
              <p>Share photo or a video of your advert. EdAdvert App posts can't exceed 10 photos.</p>
            </div>

            <div className=' bg-red-400 w-[95%] mx-auto flex flex-col gap-2'>
              <label htmlFor='description' className='font-bold'>
                Description
              </label>
              <div className='border-2 border-black rounded-md flex'>
                <textarea type="text" name="description" id="description" className='w-[100%] bg-white px-2 py-1 pb-10 ' placeholder='Type here!' ></textarea>

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
        </form>

        <div className='bg-blue-300 rounded-lg flex flex-col justify-center gap-y-3 mb-3 py-3'>
          <div className='w-[95%] mx-auto'>
            <h1 className='font-bold '>Product settings</h1>
            <p className=''>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti, saepe! Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, quasi.</p>
          </div>

<div className='flex flex-col mx-auto gap-y-4 w-[98%] bg-amber-200'>
<label className='flex justify-items-start items-start gap-x-3 hover:bg-gray-300 hover:rounded-md '>
    <div className='p-2'>
    <input type="radio" name="option1" value="option1" className=''/>
    </div>
    <div className=' '>
     <span className='text-md'>Public </span> <p className='leading-4 text-sm opacity-80'>Lorem ipsum dolor sit amet.</p>
    </div>
  </label>
<label className='flex justify-items-start items-start gap-x-3 transition-none hover:bg-gray-300 hover:rounded-md'>
    <div>
    <input type="radio" name="option1" value="option2" />
    </div>

    <div className=' '>
     <span className='text-md'>Private </span> <p className='leading-4 text-sm opacity-80'>Lorem ipsum dolor sit amet.</p>
    </div>
  </label>
</div>
        </div>


      </section>

      {/* SideSection */}
      <section className='w-2/4 bg-amber-700'>
        <div className=''>
          <div>
            <h1>Post here</h1>
          </div>

        </div>
      </section>
    </div >
  );
};

export default CreateAd