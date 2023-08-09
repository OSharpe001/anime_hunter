import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function DisplayAnimeList({ animeList }) {

  const navigate = useNavigate();

  const data = animeList.data;

  useEffect(() => {
    // !data && setTimeout(navigate, 1500, ("/"));
    !data && setTimeout(navigate, 21500, ("/"));
  }, [data]);

  console.log("DISPLAYANIMELIST'S DATA: ", data);

  return (
    <section className="data-readout">
        <h1>The Bounty</h1>
        {data ?
          <ul className="anime-list">
          {data.map(item => (
            <li key={item.id} className="bounty">
              <div className="title-thumbnail">
                <h2 className="title">{item.title}</h2>
                <img src={item.thumb} alt="thumbnail" />
              </div>
              
              <p>Current Rank: {item.ranking}</p>
              <p>Amount of Episodes: {item.episodes}</p>

              <p classname="header">Genres: </p>
              <ul>
                {item.genres.map((genre, index) => (
                  <li key={`${index}-${genre}`}>{genre}</li>
                ))}
              </ul>
              
              <p>Media Type: {item.type}</p>
              <p className="synopsis">
                <span className="header">Synopsis:</span><br/> {item.synopsis}
              </p>
              
              <p className="header">Alternative Title Names: </p>
              <ul>
                {item.alternativeTitles.map((title, index) => (
                  <li key={`${title}-${index}`}>{title}</li>
                ))}
              </ul>

              <div className="poster-link">
                <img src={item.image} alt="poster" />
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