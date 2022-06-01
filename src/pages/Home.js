import { useState } from "react";
import AddMoviesApp from "../components/addmoviesapp/AddMoviesApp";
import Hero from "../components/hero/Hero";
import Movies from "../components/movies/Movies";
import data from "../utils/constans/data";
function Home() {
    const [movies, setMovies] = useState(data);
    return(
        <div>
            <main>
                <Hero />
                <Movies movies={movies} setMovies={setMovies} />
                <AddMoviesApp movies={movies} setMovies={setMovies} />
            </main>
        </div>
    );
}

export default Home;