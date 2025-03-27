import React from 'react'

const SingleAdvertCard = () => {
  return (
    <>
            <div className="h-screen flex flex-col justify-center">
                <div class="bg-gray-200 grid grid-cols-1 md:grid-cols-2 md:mt-8 mx-auto w-[90%] shadow-lg shadow-blue-950 rounded-2xl justify-center relative overflow-hidden">
                    <div className="flex flex-col justify-evenly rounded-s-2xl w-[80%] mx-auto">
                        <Link to={'/allbooks'} className="bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90%  p-3 rounded-full shadow-lg w-10 h-10 text-lg hover:bg-gradient-to-l text-white hover:font-extrabold absolute top-5 left-3">
                            <FaArrowLeftLong className="text-white" />
                        </Link>
                        {/* <img src={Image} alt={title} className="rouded-xl" /> */}
                        <img src={`https://savefiles.org/${book?.image}?shareable_link=640`} alt={book?.title} className="rouded-xl" />
                    </div>
                    <div class="flex flex-col justify-evenly">
                        <Link to={'/allbooks'} className="bg-blue-950/50  p-3 rounded-full shadow-lg w-10 h-10 text-lg hover:bg-blue-950 text-white hover:font-extrabold absolute top-5 left-163 md:left-290">
                            <IoClose className="text-white" />
                        </Link>
                        <h2 class="text-2xl md:text-5xl/20 font-bold text-blue-950 mt-7 ">{book?.title}</h2>

                        <div className="flex">
                            <p className="text-blue-950 font-semibold text-sm md:text-md">Authored by:</p>
                            <p className=" text-blue-950 ml-2">{book?.author}</p>
                        </div>
                        <p className=''><span className='text-blue-950 font-semibold text-sm md:text-md'>ISBN:</span> <span className='
                italic text-blue-950'>{book?.ISBN}</span></p>
                        <p className=''><span className='text-blue-950 font-semibold text-sm md:text-md'>Pages:</span> <span className='text-blue-950'>{book?.numberOfPages}</span></p>
                        <p className=''><span className='text-blue-950 font-semibold text-sm md:text-md'>Book Category:</span> <span className='text-blue-950'>{book?.category}</span></p>
                        <div className="flex justify-start items-center leading-10 mb-4">
                            <FaStar className='text-blue-950' />
                            <FaStar className='text-blue-950' />
                            <FaStar className='text-blue-950' />
                            <FaStar className='text-gray-400' />
                            <div className="text-blue-950 ml-5 font-semibold">3.8 Ratings</div>
                        </div>

                        <div class="flex">
                            <div class="border border-blue-950 my-1 md:my-5 w-[60px] "></div>
                            <h2 class="text-blue-950 mx-4 md:mx-4 font-bold">ABOUT BOOK</h2>
                        </div>

                        <div class="mb-5 w-[90%] text-blue-950">
                           {book?.bookDescription}
                        </div>

                        <div className="flex justify-end items-center mt-5 w-[90%] gap-5 relative">

                            <div class=" flex">
                                <Link to={`/edit/${book.id}`}
                                    class="items-end bg-gradient-to-r from-[#056d80] from-10% to-blue-950 to-90% hover:bg-gradient-to-l px-10 py-3 rounded-lg text-white text-center hover:font-extrabold ml-auto mb-5">Edit</Link>
                            </div>

                            <div class=" flex ">
                                <Link onClick={handleDelete} to={'/allbooks'}
                                    class=" bg-red-600/60 hover:bg-red-600 px-7 py-3 rounded-lg text-white text-center hover:font-extrabold ml-auto mb-5">Delete</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
  )
}

export default SingleAdvertCard