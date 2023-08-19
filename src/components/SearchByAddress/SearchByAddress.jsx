import React, {useState} from 'react'
import style from "./styles.module.css";
import Search from '../Search/Search.jsx';
import ImageDisplay from '../ImageDisplay/ImageDisplay';


const SearchByAddress = () => {
  const [photos, setPhotos] = useState([]);


  return (
    <div className={style.container}>
        <Search setPhotos={setPhotos} />
        <ImageDisplay photos={photos}/>
    </div>
  )
}

export default SearchByAddress