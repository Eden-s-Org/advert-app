import { ChevronDown, ImagePlusIcon, EarthIcon, MessageCircle, Share2, ThumbsUp, MonitorDot, Smartphone, SmilePlusIcon, Youtube, YoutubeIcon } from 'lucide-react'
import React, { useState } from 'react'
import DashNav from "../../components/DashNav";
import VendorAdvertCard from '../../components/VendorAdvertCard';

const CreateAd = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const [title, setTitle] = useState();
  const [image, setImage] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [likes, setLikes] = useState(0);


  const handleSubmit = async (event) => {
    event.preventDefault();
    // const formData = new FormData(event.target);
    // try {
    //   const response = await apiAddAdvert()
    // } catch (error) {
    //   console.log(response)
    // }
  }

  // const handleFileUpload = () => {
  //   document.getElementById("advertVideo").click();
  // };

  return (
    <>
      <DashNav />
      <div className='w-[82.2%] ml-60 flex gap-x-6 justify-center bg-gray-200 mt-15'>
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

          <form onSubmit={handleSubmit} method="post" className='flex flex-col gap-y-5'>

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
                  <input type="file" name="media" id="advertImage" className='' accept='image/*' required onChange={((event) => setImage(event.target.value))} />
                </div>

                <div className='border border-gray-500 py-2 px-2 rounded-md'>
                  <label htmlFor='advertVideo' className='flex gap-x-2 items-center hover:cursor-pointer'>
                    <YoutubeIcon htmlFor='advertVideo' size={24} strokeWidth={2} className='text-black' />
                    Add video
                  </label>
                  <input type="file" name="media" id="advertVideo" title='Add video' accept='video/*' />
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
                  <input type="text" name="title" id="titleInput" title='Tile' placeholder='Enter title of your advert' className='border border-gray-400 p-2 rounded-lg' required onChange={((event) => setTitle(event.target.value))} />
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
                  <input type="number" name="price" id="priceInput" placeholder='How much is it going for?' className='border border-gray-400 p-2 rounded-lg' title='Price' required onChange={((event) => setPrice(event.target.value))} />
                </div>

                <div className='flex flex-col gap-2'>
                  <label htmlFor='description' className='font-semibold'>
                    Description
                  </label>
                  <textarea type="text" name="description" id="description" required className='w-[100%] bg-white px-2 py-1 pb-15 border-1 border-gray-400 rounded-lg' placeholder='Type here!' title='Description' onChange={((event) => setDescription(event.target.value))} ></textarea>
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
        <section className='w-[40%] bg-red-200 mr-4.5 mt-5.5 '>
          <div className='fixed bg-gray-200 mt-4 w-[100%]'>
            <div className='flex justify-between'>
              <div className='flex border border-gray-400 bg-white p-2 rounded-md hover:bg-gray-300 cursor-default'>
                <p>EdenAds Feed preview </p>
                <ChevronDown />
              </div>

              <div className='flex items-end border border-gray-400 rounded-md px-2'>
                <MonitorDot className='text-black/60' />
                <div className='border border-gray-400 h-6.5 '></div>
                <Smartphone className='text-black/60' />
              </div>
            </div>



            <div>
              <div className='bg-gray-100 shadow-xl rounded-xl  py-4 flex flex-col gap-y-3'>
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
                  <h2 className='text-lg font-bold text-[#424f74]'>{title}</h2>
                  <p className='text-[#424f74]'>{description}</p>
                </div>

                <div className='w-[100%] bg-gray-500 relative '>
                  {image}
                  <img src="#" alt="" className='w-[100%] h-80' />
                  <div className='h-20 w-20 rounded-full bg-red-700/90 border-4 border-white absolute bottom-8 right-8 flex justify-center items-center'>
                    <p className='text-[#EEAA77] text-center font-bold text-lg'>Ghc <br /> {price}</p>
                  </div>
                </div>
                <div className='flex justify-around'>
                  <span onClick={() => setLikes(likes + 1)} className='flex gap-x-2 items-center cursor-pointer p-2 hover:bg-gray-300 hover:rounded-md'>
                    <ThumbsUp className='text-gray-600 h-5 w-5' />
                    <p className='text-lg text-gray-700'>Like {likes}</p>
                  </span>
                  <span className='flex gap-x-2 items-center'>
                    <MessageCircle className='text-gray-600 h-5 w-5' />
                    <p className='text-lg text-gray-700'>Comment</p>
                  </span>
                  <span className='flex gap-x-2 items-center'>
                    <Share2 className='text-gray-600 h-5 w-5' />
                    <p className='text-lg text-gray-700'>Share</p>
                  </span>

                </div>
              </div>
            </div>

          </div>
        </section>
      </div>
    </>
  );
};

export default CreateAd