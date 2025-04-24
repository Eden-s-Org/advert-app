import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { apiGetSingleAdvert, apiUpdateAdvert } from '../../services/adverts';
import { ImagePlusIcon, YoutubeIcon, SmilePlusIcon } from 'lucide-react';

const EditAdvert = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [ad, setAdvert] = useState({});


    const getAdvert = async () => {
        try {
            const response = await apiGetSingleAdvert(id);
            setAdvert(response.data);
        } catch (error) {
            console.error("Error fetching advert data:", error);
        }
    };

    useEffect(() => {
        getAdvert();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        try {
            const response = await apiUpdateAdvert(id, data);
            console.log(response.data)
            alert("Advert updated successfully!");
            navigate("/dashboard/ads");
        } catch (error) {
            console.error("Error submitting advert:", error);
            alert("Advert update failed. Please try again. " + (error.response.data?.message));
        }
    };

    return (
        <div className="w-[82.2%] ml-60 flex gap-x-6 justify-center bg-gray-200 mt-15">
            <section className="w-[75%] bg-gray-200 ml-5 flex flex-col justify-center gap-y-5">

                {/* Post to Section */}
                <div className="bg-white rounded-lg flex flex-col gap-y-3 mt-5 py-3">
                    <div className="w-[95%] mx-auto">
                        <h1 className="font-bold">Post to</h1>
                    </div>
                    <div className="w-[95%] mx-auto flex border p-2 rounded-md items-center">
                        <div className="bg-gray-500 w-8 h-8 border rounded-full mr-2"></div>
                        <h1 className="font-bold">Post to</h1>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">

                    {/* Media Upload */}
                    <div className="bg-white rounded-lg flex flex-col gap-y-3 py-3">
                        <div className="w-[95%] mx-auto">
                            <h1 className="font-bold">Media</h1>
                            <p>Share a photo or video. Max 10 photos.</p>
                        </div>

                        <div className="w-[95%] mx-auto flex p-2 items-center gap-4">
                            <div className="border border-gray-500 py-2 px-3 rounded-md">
                                <label htmlFor="advertImage" className="flex gap-x-2 items-center cursor-pointer">
                                    <ImagePlusIcon size={20} strokeWidth={2} className="text-black" />
                                    Add photo
                                </label>
                                <input type="file" id="advertImage" accept="image/*" className="hidden" />
                            </div>

                            <div className="border border-gray-500 py-2 px-2 rounded-md">
                                <label htmlFor="advertVideo" className="flex gap-x-2 items-center cursor-pointer">
                                    <YoutubeIcon size={24} strokeWidth={2} className="text-black" />
                                    Add video
                                </label>
                                <input type="file" id="advertVideo" accept="video/*" className="hidden" />
                            </div>
                        </div>
                    </div>

                    {/* Post Details */}
                    <div className="bg-white rounded-lg flex flex-col gap-y-3 py-3">
                        <div className="w-[95%] mx-auto">
                            <h1 className="font-bold">Post details</h1>
                        </div>
                        <div className="w-[95%] mx-auto flex flex-col gap-5">

                            {/* Title */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="titleInput" className="font-semibold">Title</label>
                                <input
                                    type="text"
                                    name="title"
                                    id="titleInput"
                                    placeholder="Enter advert title"
                                    className="border border-gray-400 p-2 rounded-lg"
                                    defaultValue={ad.ad.title}
                                />
                            </div>

                            {/* Category */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="categoryInput" className="font-semibold">Category</label>
                                <select
                                    name="category"
                                    id="categoryInput"
                                    className="border border-gray-400 p-2 rounded-lg"
                                    defaultValue={ad.ad.category}
                                
                                >
                                    <option value="" disabled>Select category</option>
                                    <option value="products">Products</option>
                                    <option value="services">Services</option>
                                </select>
                            </div>

                            {/* Price */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="priceInput" className="font-semibold">Price (cedis)</label>
                                <input
                                    type="float"
                                    name="price"
                                    id="priceInput"
                                    placeholder="Enter price"
                                    className="border border-gray-400 p-2 rounded-lg"
                                    defaultValue={ad.ad.price}
                                />
                            </div>

                            {/* Description */}
                            <div className="flex flex-col gap-2">
                                <label htmlFor="description" className="font-semibold">Description</label>
                                <textarea
                                    name="description"
                                    id="description"
                                    className="w-full bg-white px-2 py-1 border border-gray-400 rounded-lg"
                                    placeholder="Type here!"
                                    defaultValue={ad.description}
                                />
                            </div>

                        </div>
                    </div>

                    {/* Submit Button */}
                    <div className="w-full flex justify-end gap-x-3">
                        <button className="px-2 py-2 rounded-md text-black/70 border border-gray-400 hover:bg-gray-200" disabled>
                            Finish Later
                        </button>
                        <button type="submit" className="bg-[#424f74] hover:bg-blue-950 px-5 py-2 rounded-md text-white font-bold">
                            Update
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default EditAdvert;
