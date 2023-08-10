import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header, Footer, HomePage, GetAnime, DisplayAnimeList } from "./components";
import { images } from "./components/images";
import './App.css';


export default function App() {

  images.map((image => console.log("IMAGES IN MAIN APP: ", image)));
  // console.log("APP.JS IMAGES.LENGTH: ", images.length);
  // console.log("Math.floor(Math.random * images.length): ", Math.floor(Math.random() * images.length));

  const [currentBackground, setCurrentBackground] = useState(images[Math.floor(Math.random() * images.length)]);
  console.log("NEW CURRENTBACKGROUND INFO: ", currentBackground);
  console.log("NEW CURRENTBACKGROUND.ALT: ", currentBackground.alt);
  console.log("NEW CURRENTBACKGROUND.CLASS: ", currentBackground.class);
  console.log("NEW CURRENTBACKGROUND.IMAGE: ", currentBackground.image);

  const navigate = useNavigate();

  const [animeList, setAnimeList] = useState([]);

  return (
    <div className={`App ${currentBackground.class}`} style={{backgroundImage: `url("${currentBackground.image}")`}}>
      <Header />
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hunt" element={<GetAnime
                                            setAnimeList={setAnimeList}
                                            navigate={navigate}
                                          />} />
            <Route path="/bounty" element={<DisplayAnimeList
                                              animeList={animeList}
                                              navigate={navigate}
                                            />} />
      </Routes>
      <Footer />
    </div>
  );
};
