import React from "react";
import data from "./Data";

const Album = () => {
    return <img src ="{data.album.images[0].url}"></img>;
}

export default Album;