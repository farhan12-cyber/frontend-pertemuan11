import styles from "./movie.module.css";
function Movie(props) {
  // di destructing data nya
  const {movie} = props;
    return (
        <div className={styles.movie}>
            <img
              className={styles.movie__image}
              src={movie.poster || `https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
              alt=""/>
            <h3 className={styles.movie__title}>{movie.title}</h3>
            <p className={styles.movie__date}>{movie.year || movie.release_date}</p>
          </div>
    );
}
export default Movie;