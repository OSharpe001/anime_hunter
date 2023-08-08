import { Routes, Route } from 'react-router-dom';
// import Header from './components/Header';
// import Footer from './components/Footer';
// import GetAnime from './components/GetAnime';
// import DisplayAnimeList from './components/DisplayAnimeList';
import { Header, Footer, GetAnime, DisplayAnimeList } from "./components"
import './App.css';
import { useState } from 'react';

export default function App() {

  const [animeList, setAnimeList] = useState([]);

  return (
    <div className="App">
      <h1>Anime Hunter</h1>
      <Header />
      <Routes>
            {/* <Route path="/" element={<HomePage />}/> */}
            <Route path="/hunt" element={<GetAnime />}/>
            <Route path="/bounty" element={<DisplayAnimeList animeList={animeList} />}/>
            {/* <Route path="/" element={<HomePage />}/> */}
      </Routes>
      <Footer />
      <GetAnime setAnimeList={setAnimeList}/>
    </div>
  );
};
