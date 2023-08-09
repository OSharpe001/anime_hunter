import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DisplayAnimeList({ animeList }) {

  const navigate = useNavigate();

  const data = animeList.data;

  useEffect(() => {
    !data && setTimeout(navigate, 1500, ("/"));
  }, [data]);

  console.log("DISPLAYANIMELIST'S ANIMELIST.DATA: ", animeList.data);
  console.log("DISPLAYANIMELIST'S DATA: ", data);

  return (
    <section className="data-readout">
        <h1>The Bounty</h1>
        {animeList.data ?
          <ul className="anime-list">
          {animeList.data.map(item => (
            <li key={item.id}>
              <h2 className="title">{item.title}</h2>
              <p>Current Rank: {item.ranking}</p>
              <p>Media Type: {item.type}</p>
              <p className="synopsis-header">Synopsis: </p>
              <p className="synopsis">{item.synopsis}</p>
            </li>
          ))}
        </ul> :
        <h2>Take another shot</h2>
        }



        {/* <ul className="anime-list">
          {animeList.data.map(item => (
            <li key={item.id}>
              <p className="alt-titles-header">Alternative Title Names: </p>
              <ul>
                {item.alternativeTitles.map((title, index) => (
                  <li key={`${title}-${index}`}>{title}</li>
                ))}
              </ul>
              <p>Amount of Episodes: {item}</p>
              <p classname="genres-header">Genres: </p>
              <ul>
                {item.genres.map((genre, index) => (
                  <li key={`${index}-${genre}`}></li>
                ))}
              </ul>
              <img src={item.image} alt="poster" />
              <Link className="nav-item button" aria-label="On Click" to={item.link} >Find on MyAnimeList.Net</Link>
              // <p>Current Rank: {item.ranking}</p>
              <img src={item.thumb} alt="thumbnail" />
              // <h2 className="title">{item.title}</h2>
              // <p>Media Type: {item.type}</p>
              // <p className="synopsis-header">Synopsis: </p>
              // <p className="synopsis">{item.synopsis}</p>
            </li>
          ))}
        </ul> */}
    </section>
  );
};