import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { Header, Footer, HomePage, GetAnime, DisplayAnimeList } from "./components";
import { images } from "./components/images";
import './App.css';


export default function App() {

  const currentBackground = images[Math.floor(Math.random() * images.length)];

  const navigate = useNavigate();

  const [animeList, setAnimeList] = useState([]);

  return (
    <div className={`App ${currentBackground.class}`} style={{backgroundImage: `url("${currentBackground.image}")`}}>
      <Header navigate={navigate}/>
      <Routes>
            <Route path="/" element={<HomePage navigate={navigate} />} />
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
