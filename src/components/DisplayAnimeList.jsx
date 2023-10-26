import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Footer from "./Footer";


export default function DisplayAnimeList({ animeList, navigate, title, genres, currentBackground, setCurrentBackground, viewWatchList, storeInWatchList, eraseWatchListItem }) {

  // LIST OF ANIME FROM API CALLS
  const data = animeList.data;

  // GRAB CURRENT WATCHLIST TITLES FROM LOCAL STORAGE
  const currentWatchList = viewWatchList();

  // NEEDED A USESTATE TO FORCE RERENDER. DIDN'T REALLY NEED THE VARIABLE
  const [latestInterest, setLatestInterest] = useState("");

  const addToWatchList = (title) => {
    setLatestInterest(title);
    storeInWatchList(title);
  };

  const eraseFromWatchList = (title) => {
    setLatestInterest(title);
    eraseWatchListItem(title);
  };

  // SET NEW BACKGROUND POSTER WHEN A PARTICULAR POSTER BUTTON IS PRESSED
  const setNewPoster = (({ target }) => {
    setCurrentBackground({class: "character-show-image", image: target.src, alt: "background fan art"});
  });

  // IF THERE'S NO DATA, RETURN TO MAIN PAGE
  useEffect(() => {
    !data && setTimeout(navigate, 1500, ("/"));
  }, [data, navigate]);

  // console.log("CURRENTBACKGROUND: ", currentBackground)

  // console.log("DISPLAYANIMELIST'S CURRENTBACKGROUND.SRC: ", currentBackground.image);

  return (
    <>
      {data ?
        <section className="data-readout">
          <h1>{title || genres.length > 0 ? "The Bounty" : "Beginner's Bounty"}</h1>

          <ul className="anime-list">
            {data.map((item,index) => (
              <li key={`${item.id}-${index}`} className="bounty">
                <div className="title-thumbnail">
                  <h2 className="title">{item.title}</h2>
                  <img src={item.thumb} alt="thumbnail" />
                </div>

                <p><span className="header">Current Rank:</span> {item.ranking}</p>
                <p><span className="header">Amount of Episodes:</span> {item.episodes}</p>

                <p className="header">Genres: </p>
                <ul className="genre-list">
                  {item.genres.map((genre, index) => (
                    <li key={`${item.title}-${index}-${genre}`}>{genre}</li>
                  ))}
                </ul>

                <p><span className="header">Media Type:</span> {item.type}</p>
                <p className="synopsis">
                  <span className="header">Synopsis:</span><br/> {item.synopsis}
                </p>

                <p className="header">Aliases/AKA: </p>
                <ul className="alias-list">
                  {item.alternativeTitles.map((title, index) => (
                    <li className="alias-list-item" key={`${title}-${index}`}>{title}</li>
                  ))}
                </ul>

                <div className="poster-link">
                  <button onClick={e => setNewPoster(e)}>
                    <img src={item.image} alt="poster" />
                  </button>
                  <div className="bountys-buttons">
                    <button className="button" onClick={() => !currentWatchList || currentWatchList.filter(obj => obj.name === item.title).length === 0 ? addToWatchList(item.title) : eraseFromWatchList(item.title)}>
                      {!currentWatchList || currentWatchList.filter(obj => obj.name === item.title).length === 0 ? "Add to Bingo Book" : "Remove From Bingo Book"}
                    </button>
                    <Link aria-label="On Click" to="/art" hidden={currentBackground.image !== item.image} className="button">Go To Poster Page</Link>
                    <Link className="button" target="_blank" aria-label="On Click" to={item.link} >Find on myanimelist.net</Link>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </section>
        :
        <section className="reset-readout">
          <h1>Take another shot</h1>
        </section>
      }
      <Footer />
    </>
  );
};