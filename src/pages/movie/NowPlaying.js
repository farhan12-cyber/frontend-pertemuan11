import axios from "axios";
import { useEffect, useState } from "react";
import AddMoviesApp from "../../components/addmoviesapp/AddMoviesApp";
import Hero from "../../components/hero/Hero";
import Movies from "../../components/movies/Movies";

function NowPlaying() {
    const API_KEY = process.env.REACT_APP_API_KEY;
    const URL = `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}`;
    
    const [movies, setMovies] = useState([]);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(async ()=>{
        getTopRated();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);
    
    async function getTopRated(){
        const response = await axios(URL);
        setMovies(response.data.results);
    }
    return (
    <div>

    <Hero />
    <Movies movies={movies} title='Now Playing Movies'/>
    <AddMoviesApp />
    </div>
    );
}

export default NowPlaying;