import React from "react";

function Music({url, title, artist}) {
    return (
     <><img src={url} alt={title} />
     <p>{title}</p>
     <p>{artist}</p></>
    )
  
}

export default Music;