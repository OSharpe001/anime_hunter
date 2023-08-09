import { Routes, Route } from 'react-router-dom';
import { Header, Footer, HomePage, GetAnime, DisplayAnimeList } from "./components";
import { useState } from 'react';
import './App.css';


export default function App() {

  const [animeList, setAnimeList] = useState([]);

  return (
    <div className="App">
      <Header />
      <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/hunt" element={<GetAnime setAnimeList={setAnimeList}/>} />
            <Route path="/bounty" element={<DisplayAnimeList animeList={animeList} />} />
      </Routes>
      <Footer />
    </div>
  );
};
