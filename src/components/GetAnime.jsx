import { useState, useEffect } from 'react';
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useNavigate } from "react-router-dom";


export default function GetAnime({ setAnimeList }) {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [genres, setGenres] = useState([]);
    
    const [formInfo, setFormInfo] = useState({
        searchTitle: "",
        searchGenres: []
    })


    const handleChange = ({ target }) => {
        let name = target.name;
        let value = target.value;
        name === "title" && setTitle(value);
        name === "genres" && value !== "" && setGenres([value]);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormInfo({
            ...formInfo,
            searchTitle: title,
            searchGenres: [...genres]
        });
        navigate("/bounty");
    };

    useEffect(() => {
        console.log("FORMINFO READ FROM WITHIN USEEFFECT: ", formInfo);
        try {
            fetchFromAPI(`anime?page=1&size=10${formInfo.searchGenres.length>0 ? `&genres=${formInfo.searchGenres.slice(0).join(",")}` : ""}&sortBy=ranking&sortOrder=asc${formInfo.searchTitle ? `&search=${formInfo.searchTitle}` : ""}`)
            .then((data) => {
                console.log("DATA FROM FETCH: ", data);
                setAnimeList(data);
            });
        } catch (error) {
            console.log("An error within the useEffect: ", error);
        }
    }, [formInfo]);

  return (
    <div>
        <h1>Let's Hunt Some Anime!</h1>
        <form action="">
            <label htmlFor="title">Title</label>
            <input onChange={handleChange} type="text" name="title" placeholder="Anime Title" value={title}/>
            <label htmlFor="genres">{`Genres\n(if more than one, seperate with commas)`}</label>
            <input onChange={handleChange} type="text" name="genres" placeholder="Genres " value={genres}/>
            <button onClick={e=>handleSubmit(e)} type="submit" className="get-list">Check the Bounty</button>
        </form>
    </div>
  );
};
