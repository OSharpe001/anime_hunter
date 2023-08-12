import { fetchFromAPI } from "../utils/fetchFromAPI";
import Footer from "./Footer";


export default function GetAnime({ setAnimeList, navigate, title, setTitle, genres, setGenres }) {

    const handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;
        name === "title" && setTitle(value);
        name === "genres" && value !== "" && setGenres([value]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchFromAPI(`anime?page=1&size=10${genres.length>0 ? `&genres=${genres.slice(0).join(",")}` : ""}&sortBy=ranking&sortOrder=asc${title ? `&search=${title}` : ""}`)
            .then((data) => { setAnimeList(data) })
        setTimeout(navigate, 1000, "/bounty");
    };

  return (
    <>
        <section className="search-page">
            <h1>Let's Hunt Some Anime!</h1>
            <form action="">
                <label htmlFor="title">Title</label>
                <input onChange={handleChange} type="text" name="title" placeholder="Anime Title" value={title}/>
                <label htmlFor="genres">Genres<br/>(if more than one, seperate with commas)</label>
                <input onChange={handleChange} type="text" name="genres" placeholder="Genres " value={genres}/>
                <button onClick={e=>handleSubmit(e)} type="submit" className="get-list">Check the Bounty</button>
            </form>
        </section>
        <Footer />
    </>
  );
};
