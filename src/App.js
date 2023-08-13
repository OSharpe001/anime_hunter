import { Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header, HomePage, GetAnime, DisplayAnimeList, About, PosterPage, WatchList } from "./components";
import { images } from "./components/images";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import './App.css';


export default function App() {

  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState([]);
  const [preserveImage, setPreserveImage] = useState(false);
  // const [watchList, setWatchList] = useState([]);

  const [currentBackground, setCurrentBackground] = useState(!preserveImage && images[Math.floor(Math.random() * images.length)]);

  const changeImage = () => (setCurrentBackground(images[Math.floor(Math.random() * images.length)]));

  const navigate = useNavigate();

  const [animeList, setAnimeList] = useState([]);

  // LOCAL STORAGE SETTINGS FOR WATCHLIST (BINGO-BOOK)
  const viewWatchList = () => JSON.parse(localStorage.getItem("WatchList"));

  const storeInWatchList =  (title) => {
      const oldWatchList = viewWatchList();
      console.log("OLD WATCHLIST VALUES: ", oldWatchList);
      if (!viewWatchList()) {
        console.log("PLACING FIRST ITEM IN WATCHLIST");
        localStorage.setItem("WatchList", JSON.stringify([{name:title, active: true}]));
        console.log("AFTER PLACING FIRST ITEM IN WATCHLIST- VALUES: ", viewWatchList());
      } else {
        const check = oldWatchList.filter(obj => obj.name === title);
        if (check.length > 0) {
          return
        } else {
        const newWatchList = [...oldWatchList, {name:title, active: true}]
        console.log("NEWWATCHLIST: ", newWatchList);
        localStorage.setItem("WatchList", JSON.stringify(newWatchList));
        console.log("WATCHLIST NOW LOOKS LIKE THIS: ", viewWatchList());
      };
    };
  };

  const toggleWatchListItem = (title) => {
    const currentWatchList = viewWatchList();
    currentWatchList.forEach(object => {
      if (object.name === title) {
        object.active = !object.active
      };
    });
    console.log("TOGGLEWATCHLISTITEM'S CURRENTWATCHLIST", currentWatchList);
    localStorage.setItem("WatchList", JSON.stringify(currentWatchList));
  };

  const eraseWatchListItem = (title) => {
    const previousWatchList = viewWatchList();
    const updatedWatchList = previousWatchList.filter(obj => obj.name !== title);
    console.log("ERASEWATCHLISTITEM'S UPDATED WATCHLIST: ", updatedWatchList);
    localStorage.setItem("WatchList", JSON.stringify(updatedWatchList));
  };
  // NEED TO CREATE A MODIFICATION FUNCTION (TO SCRATCH NAME OFF IN BINGO BOOK) AND ERASE-FROM-WATCHLIST FUNCTION
  // MAY HAVE TO PUT EACH TITLE IN AN OBJECT TO HAVE AN "ACTIVE" KEY WITH A BOOLEAN VALUE...
  
  // storeInWatchList("Naruto");
  // storeInWatchList("Bleach");
  // storeInWatchList("One Piece");
  // storeInWatchList("Naruto");
  // toggleWatchListItem("Naruto");
  // toggleWatchListItem("Bleach");
  // toggleWatchListItem("One Piece");
  // toggleWatchListItem("Naruto");
  // eraseWatchListItem("Naruto");
  // eraseWatchListItem("Bleach");
  console.log("APP.JS' VIEWWATCHLIST: ", viewWatchList());
  // console.log("APP.JS' TEST FOR CURRENT PAGE: ", useLocation());
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
    <div className='App'>
      <div className={currentBackground.class} style={{backgroundImage: `url("${currentBackground.image}")`}}>
        <Header
            preserveImage={preserveImage}
            setPreserveImage={setPreserveImage}
            navigate={navigate}
            changeImage={changeImage}
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
                                                  // watchList={watchList}
                                                  // setWatchList={setWatchList}
                                                  viewWatchList={viewWatchList}
                                                  eraseWatchListItem={eraseWatchListItem}
                                                  storeInWatchList={storeInWatchList}
                                                  currentBackground={currentBackground}
                                                />} />
                <Route path="/guild" element={<About
                                                  navigate={navigate}
                                                />} />
                <Route path="/art" element={<PosterPage />} />
                <Route path="/bingo-book" element={<WatchList 
                                                      viewWatchList={viewWatchList}
                                                      toggleWatchListItem={toggleWatchListItem}
                                                      eraseWatchListItem={eraseWatchListItem}
                                                    />} />
          </Routes>
          {/* <button onClick={toggleImageLock}>{preserveImage ? "Unlock Image" : "Lock Image"}</button> */}
      </div>
    </div>
  );
};
