import logo from './logo.svg';
import './App.css';

import Button from './components/Button';

import Search from './components/Search';

import Album from './components/Album';

import Title from './components/Title';

import Artis from './components/Artis';
import Songs from './components/Page';

import Gif from './components/Gif/Index';


import dataGambar from './components/Gambar';
import TampilanGambar from './components/LoopingGambar';
import Music from './components/Track/Index';
import DatMus from './components/Track/DataMusic';


function App() {
  return (
    <div className="App">
      <div>
       {/* <Songs/>  */}

      {/* <Gif/>
      <Search/>
       <Button/> */}

       {/* <TampilanGambar/> */}
       {/* {dataGambar.filter(dataGambar => dataGambar.rating === "g").map(dataGambar => (
        
          <img src={dataGambar.url}/>
        
      ))} */}
     
      {/* {DatMus.filter(DatMus => DatMus.artists === "Queen").map(DatMus => (
        
        <img src={DatMus.url}/>
      
    ))} */}
      {
       DatMus.map((music) => {
            return <Music key={music.id} url={music.album.images[0].url} title={music.name} artist={music.artists[0].name}/>
          })

        }
        {/* <Music/> */}



      </div>
     
    </div>
  );
}

export default App;
