import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function DisplayAnimeList({ animeList, navigate, title, genres, setCurrentBackground }) {

  const data = animeList.data;

  const setNewPoster = (({ target }) => {
    // console.log("DISPLAYANIMELIST'S SETNEWPOSTER E.TARGET", target);
    setCurrentBackground({class: "character-show-image", image: target.src, alt: "background fan art"});
  });

  useEffect(() => {
    !data && setTimeout(navigate, 1500, ("/")); // ***PLACE THIS BACK WHEN TESTING IS DONE!***
    // !data && setTimeout(navigate, 21500, ("/"));
  }, [data, navigate]);

  return (
    <section className="data-readout">
        <h1>{title || genres.length > 0 ? "The Bounty" : "Beginner's Bounty"}</h1>
        {data ?
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
                  <li key={`${title}-${index}`}>{title}</li>
                ))}
              </ul>

              <div className="poster-link">
                <button onClick={e => setNewPoster(e)}>
                  <img src={item.image} alt="poster" />
                </button>
                <Link className="nav-item button" target="_blank" aria-label="On Click" to={item.link} >Find on myanimelist.net</Link>
              </div>
              
            </li>
          ))}
        </ul> :
        <h2 className="reset-readout">Take another shot</h2>
        }
    </section>
  );
};