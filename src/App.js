import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header, Footer, HomePage, GetAnime, DisplayAnimeList, About } from "./components";
import { images } from "./components/images";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import './App.css';


export default function App() {

  const [currentBackground, setCurrentBackground] = useState(images[Math.floor(Math.random() * images.length)]);

  const navigate = useNavigate();

  const [animeList, setAnimeList] = useState([]);
  
  useEffect(() => {
    try {
        fetchFromAPI(`anime?page=1&size=10&sortBy=ranking&sortOrder=asc`)
        .then((data) => {
            setAnimeList(data);
        });
    } catch (error) {
        console.log("An error within the useEffect: ", error);
    }
}, [setAnimeList]);

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
            <Route path="/guild" element={<About
                                              navigate={navigate}
                                            />} />
      </Routes>
      <Footer />
    </div>
  );
};
