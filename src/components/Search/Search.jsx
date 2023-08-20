import React, {useState, useEffect} from 'react'
import style from "./styles.module.css";
import {BsSearch} from "react-icons/bs";
import {getAddressDetails, getPhotosByZpid} from "../../apis/AddressApi.js";


const Search = ({setPhotos}) => {
    const [address , setAddress] = useState("");

    const handleAddressChange = (e)=>{
        setAddress(e.target.value);
    }

    const handleAddressSearch =async ()=>{
        if(!address){
            console.log("please enter a Address");
            return;
        }

        const zpid = await getAddressDetails(address);

        if(zpid == null){
            console.log("Please Enter a Valid Address");
        }

        const photos = await getPhotosByZpid(zpid);
        console.log(address);
        console.log(zpid);
        console.log(photos);
        setPhotos(photos);
    }

    const handleDummyAddress = async(e)=>{
        if(!address){
            console.log("please enter a Address");
            return;
        }

        const zpid = await getAddressDetails(address);

        if(zpid == null){
            console.log("Please Enter a Valid Address");
        }

        // const photos = 
    }

  return (
    <div className={style.container}>
        <p>View Home By typing the address</p>
        <div className={style.inputField}>
            <input value={address} type="text" placeholder='Street, city, state, zipcode'
                onChange={handleAddressChange}
                onKeyDown={(e)=>{
                    if(e.key == "Enter"){
                        handleAddressSearch();
                    }
                }}
            />
            <BsSearch style={{marginLeft : "-40px", color: "var(--grey-70)"}} />
        </div>
    </div>
  )
}

export default Search