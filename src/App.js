import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header, HomePage, GetAnime, DisplayAnimeList, About, PosterPage, WatchList } from "./components";
import { images } from "./components/images";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import './App.css';


export default function App() {

  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const [preserveImage, setPreserveImage] = useState(false);
  const [watchList, setWatchList] = useState([]);

  const [currentBackground, setCurrentBackground] = useState(!preserveImage && images[Math.floor(Math.random() * images.length)]);


  const navigate = useNavigate();

  const [animeList, setAnimeList] = useState([]);

  // LOCAL STORAGE SETTINGS FOR WATCHLIST (BINGO-BOOK)
  const viewWatchList = () => JSON.parse(localStorage.getItem("WatchList"));

  const storeWatchList =  (title) => {
      const oldWatchList = viewWatchList();
      console.log("OLD WATCHLIST VALUES: ", oldWatchList);
      if (!viewWatchList()) {
        console.log("PLACING FIRST ITEM IN WATCHLIST");
        localStorage.setItem("WatchList", JSON.stringify([title])); 
        console.log("AFTER PLACING FIRST ITEM IN WATCHLIST- VALUES: ", viewWatchList());
      } else {
        if (oldWatchList.includes(title)) {
          return
        } else {
        const newWatchList = [...oldWatchList, title]
        console.log("NEWWATCHLIST: ", newWatchList);
        localStorage.setItem("WatchList", JSON.stringify(newWatchList));
        console.log("WATCHLIST NOW LOOKS LIKE THIS: ", viewWatchList());
      };
    };
  };

  storeWatchList("Naruto");
  storeWatchList("Bleach");
  storeWatchList("One Peice");
  console.log(viewWatchList());
  // ***************************

  // ***NECESSARY! REMEMBER TO UNCOMMENT WHEN TESTING IS COMPLETE!***
  // useEffect(() => {
  //   try {
  //       fetchFromAPI(`anime?page=1&size=10&sortBy=ranking&sortOrder=asc`)
  //       .then((data) => {
  //           setAnimeList(data);
  //       });
  //   } catch (error) {
  //       console.log("An error within the useEffect: ", error);
  //   }
  // }, [setAnimeList]);

  // const toggleImageLock = () => {
  //   setPreserveImage(!preserveImage);
  // };

  return (
    <div className={`App ${currentBackground.class}`} style={{backgroundImage: `url("${currentBackground.image}")`}}>
      <Header
          preserveImage={preserveImage}
          setPreserveImage={setPreserveImage}
          navigate={navigate}
          />
        <Routes>
              <Route path="/" element={<HomePage navigate={navigate} />} />
              <Route path="/hunt" element={<GetAnime
                                              title={title}
                                              setTitle={setTitle}
                                              genres={genres}
                                              setGenres={setGenres}
                                              setAnimeList={setAnimeList}
                                              navigate={navigate}
                                            />} />
              <Route path="/bounty" element={<DisplayAnimeList
                                                animeList={animeList}
                                                title={title}
                                                genres={genres}
                                                navigate={navigate}
                                                setCurrentBackground={setCurrentBackground}
                                                watchList={watchList}
                                                setWatchList={setWatchList}
                                              />} />
              <Route path="/guild" element={<About
                                                navigate={navigate}
                                              />} />
              <Route path="/art" element={<PosterPage />} />
              <Route path="/bingo-book" element={<WatchList />} />
        </Routes>
        {/* <button onClick={toggleImageLock}>{preserveImage ? "Unlock Image" : "Lock Image"}</button> */}
    </div>
  );
};
