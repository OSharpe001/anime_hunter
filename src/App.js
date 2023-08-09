import { Routes, Route } from 'react-router-dom';
import { Header, Footer, HomePage, GetAnime, DisplayAnimeList } from "./components";
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { images } from "./"
import './App.css';


export default function App() {

  const navigate = useNavigate();

  const [animeList, setAnimeList] = useState([]);

  return (
    <div className="App">
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
