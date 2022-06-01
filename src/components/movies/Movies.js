import Movie from "../movie/movie";
import styles from "./Movies.module.css";
import {nanoid} from "nanoid";
function Movies(props) {
  // membuat state movies
  const {movies, setMovies, title} = props;
  // membuat fungsi untuk handle klik
  function handleClick() {
    const movie={
      id: nanoid(),
      title: "Spider-Dog",
      year: "2023",
      type: "Movie",
      poster:"https://picsum.photos/id/237/200/300",
    };
    setMovies([...movies, movie]);
  }
  return (
    <div className={styles.container}>
      <section className={styles.movies}>
        <h2 className={styles.movies__title}>{title}</h2>
        <div className={styles.movie__container}>
          {/* Looping data menggunakan map */}
          {
            movies.map((movie) => {
              return <Movie key={movie.id} movie={movie} />;
            })
          }
        </div>
        {/* Menambahkan button */}
      <button onClick={handleClick} >Add Movie</button>
      </section>
    </div>
  );
}

export default Movies;