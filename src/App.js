import { Routes, Route, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Header, HomePage, GetAnime, DisplayAnimeList, About, PosterPage, WatchList } from "./components";
import { images } from "./components/images";
import { fetchFromAPI } from "./utils/fetchFromAPI";
import './App.css';


export default function App() {

  const [title, setTitle] = useState("");
  const [genres, setGenres] = useState([]);

  // SET UP A USESTATE TO STOP IMAGE FROM CHANGING WHEN GOING TO THE POSTER PAGE
  const [preserveImage, setPreserveImage] = useState(false);
  const [currentBackground, setCurrentBackground] = useState(!preserveImage && images[Math.floor(Math.random() * images.length)]);

  // SET UP A USESTATE TO CHANGE IMAGE ONCE ON THE POSTER PAGE
  const changeImage = () => (setCurrentBackground(images[Math.floor(Math.random() * images.length)]));

  // A LOT OF PAGES NEED TO USE USENAVIGATE SO I DECLARED IT ONCE AND PASSED IT DOWN AS PROPS
  const navigate = useNavigate();

  const [animeList, setAnimeList] = useState([]);

  // **LOCAL STORAGE SETTINGS FOR WATCHLIST (BINGO-BOOK)
  const viewWatchList = () => JSON.parse(localStorage.getItem("WatchList"));

  const storeInWatchList =  (title) => {
      const oldWatchList = viewWatchList();
      if (!viewWatchList()) {
        localStorage.setItem("WatchList", JSON.stringify([{name:title, active: true}]));
      } else {
        const check = oldWatchList.filter(obj => obj.name === title);
        if (check.length > 0) {
          return
        } else {
        const newWatchList = [...oldWatchList, {name:title, active: true}]
        localStorage.setItem("WatchList", JSON.stringify(newWatchList));
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
    localStorage.setItem("WatchList", JSON.stringify(currentWatchList));
  };

  const eraseWatchListItem = (title) => {
    const previousWatchList = viewWatchList();
    const updatedWatchList = previousWatchList.filter(obj => obj.name !== title);
    localStorage.setItem("WatchList", JSON.stringify(updatedWatchList));
  };

  // ***NECESSARY! REMEMBER TO UNCOMMENT WHEN TESTING IS COMPLETE!*** Currently doubles the api requests when also using search
  // INITIAL SEARCH USEEFFECT
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

  return (
    <div className='App'>
      <div className={`container ${currentBackground.class}`} style={{backgroundImage: `url("${currentBackground.image}")`}}>
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
      </div>
    </div>
  );
};
