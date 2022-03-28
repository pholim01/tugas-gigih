import React from "react";
import DataGif from "./DataGif";


const Gif = () => {
    return (
       <><img src={DataGif.url}/>
       <p>{DataGif.title}</p></>
    ); 
  
}

export default Gif;