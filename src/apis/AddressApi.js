const server = "https://zillow56.p.rapidapi.com";
import axios from "axios";

//this function is returning the zpid of the given address/ if address is wrong then we give zpid of closest address
export const getAddressDetails = async (address) => {
    try{
        const response = await axios.get(
            `${server}/search?location=${address}`,
            {
              headers: {
                "Content-type": "application/json",
                "X-RapidAPI-Key" : "9c9ad0de06msh170f4fdbeaaeb96p19852fjsnaa7aa2e95c54"
              },
            }
          );
        
        // console.log(response.data.zpid);

        if(response?.data.zpid){
            return response.data.zpid;
        }else if(response?.data?.comps?.size){
            return response.data.comps[0].zpid;
        }
        return null
    }catch(error){
        console.log(error);
    }
}

//this endpoint fetches the images corrosponding to a property(zpid);
export const getPhotosByZpid = async (zpid) =>{
    try{

        const response = await axios.get(
            `${server}/photos?zpid=${zpid}`,
            {
              headers: {
                "Content-type": "application/json",
                "X-RapidAPI-Key" : "9c9ad0de06msh170f4fdbeaaeb96p19852fjsnaa7aa2e95c54"
              },
            }
        );
        let photos = [];

        if(response?.data){
            for(let i=0; i<response.data.photos.length; i++){
                const singlePhoto = response.data.photos[i].mixedSources.jpeg.pop();
                photos.push(singlePhoto);
            }
        }

        return photos;

    }catch(error){
        console.log(error);
    }
}
