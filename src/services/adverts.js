import { apiClient } from "./config";

export const apiAddAdvert = async (payload) => {
    return apiClient.post("/advert",payload,{
        headers:{
            Authorization:`Bearer ${localStorage.getItem("accessToken")}`,
        },
    });
};
   

export const apiGetAllAdverts = async () => 
    apiClient.get("/advert", {
headers:{
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
},
    });
 

export const apiGetVendorAdverts = async() =>
     apiClient.get("/vendor-adverts");    

export const apiUpdateAdvert = async(id,payload) => 
    apiClient.patch(`/adverts/${id}, payload`);


export const apiGetSingleAdvert = async() => 
    apiClient.get(`/adverts/${id}`);