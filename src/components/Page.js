import data from "./Data";

const Songs = () => {
    return (
            <><img src={data.album.images[0].url} />
            <p className='music-title'>{data.name}</p>
            <p className='music-artist'>{data.artists[0].name}</p>
            <button className='btn select'>Select</button></>
    );
}

export default Songs;