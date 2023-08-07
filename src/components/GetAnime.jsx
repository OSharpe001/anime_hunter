import { useState, useEffect } from 'react';
import { fetchFromAPI } from "../utils/fetchFromAPI";


export default function GetAnime() {

    // const [title, setTitle] = useState("Fullmetal");
    const [title, setTitle] = useState("");
    // const [genres, setGenres] = useState(["Fantasy","Drama"]);
    const [genres, setGenres] = useState([]);
    
    const [formInfo, setFormInfo] = useState({
        searchTitle: "",
        searchGenres: []
    })
    const [animeList, setAnimeList] = useState([]);

    const handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;
        // console.log("IN HANDLECHANGE NAME & VALUE: ", name, value);
        name === "title" && setTitle(value);
        name === "genres" && value !== "" && setGenres([value]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("HANDLESUBMIT'S E.TARGET.VALUE: ", e.target.value);
        // console.log("HANDLESUBMIT'S TITLE INFO: ", title);
        // console.log("HANDLESUBMIT'S GENRES INFO: ", genres);
        setFormInfo({
            ...formInfo,
            searchTitle: title,
            searchGenres: [...genres]
        })
    };


    // page: '1',
    // size: '10',
    // // search: 'Fullmetal',
    // // genres: 'Fantasy,Drama',
    // sortBy: 'ranking',
    // sortOrder: 'asc'

    // console.log("GENRES: ", genres.slice(0).join(","))
    useEffect(() => {
        console.log("FORMINFO READ FROM WITHIN USEEFFECT: ", formInfo);
        try {
            fetchFromAPI(`anime?page=1&size=10${formInfo.searchGenres.length>0 ? `&genres=${formInfo.searchGenres.slice(0).join(",")}` : ""}&sortBy=ranking&sortOrder=asc${formInfo.searchTitle ? `&search=${formInfo.searchTitle}` : ""}`)
            // const data = fetchFromAPI(`anime?page=1&size=10${formInfo.searchGenres.length>0 ? `&genres=${formInfo.searchGenres.slice(0).join(",")}` : ""}&sortBy=ranking&sortOrder=asc&search=${formInfo.searchTitle}`);
            .then((data) => {
                console.log("DATA FROM FETCH: ", data);
                setAnimeList(data);
            });
            // console.log("DATA FROM FETCH: ", data)
        } catch (error) {
            console.log("An error within the useEffect: ", error);
        }
    }, [formInfo]);

  return (
    <div>
        <h1>GetAnime</h1>
        <form action="">
            <label htmlFor="title">Title</label>
            <input onChange={handleChange} type="text" name="title" placeholder="Anime Title" value={title}/>
            <label htmlFor="genres">{`Genres\n(if more than one, seperate with commas)`}</label>
            <input onChange={handleChange} type="text" name="genres" placeholder="Genres " value={genres}/>
            <button onClick={e=>handleSubmit(e)} type="submit" className="get-list">Submit</button>
        </form>
    </div>
  );
};