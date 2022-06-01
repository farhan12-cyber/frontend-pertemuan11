import { nanoid } from "nanoid";
import { useState } from "react";
import Button from "../ui/button";
import styles from "./AddMoviesApp.module.css";
// ===========================================================================
function AddMoviesApp(props) {
    const {movies, setMovies} = props;

    const [title, setTitle] = useState ("");
    const [date, setDate] = useState("");
    const [tipe, setTipe] = useState("default");
    const [poster, setPoster] = useState("");
// ===========================================================================
    // membuat state : istittlerror, isdateerror, isPosterError untuk state error
    const[formError, setFormError] = useState({
        isTitleError : false,
        isDateError : false,
        isPosterError : false,
    });

    const {isTitleError,isDateError,isPosterError} = formError;
// ===========================================================================
    // buat fungsi handle
    function handleTitle(e) {
        setTitle(e.target.value);
    }
    // buat function handle
    function handleDate(e) {
        setDate(e.target.value);
    }
    function handleTipe(e){
        setTipe(e.target.value);
    }
    function handlePoster(e) {
        setPoster(e.target.value);
    }
// ===========================================================================
    // cegah refresh menggunakan function
    function handleSubmit(e) {
        e.preventDefault();
        if (title === ""){
            setFormError({
                ...formError,
                isTitleError: true
            });
            return false;
        }
        else if(date === ""){
            setFormError({
                ...formError,
                isDateError: true
            });
            return false
        }else if(poster === ""){
            setFormError({
                ...formError,
                isPosterError: true
            });
            return false;
        }
        else{
        const movie = {
            id : nanoid(), title : title,
            year : date, type : tipe,
            poster :poster,
        };
        setMovies([...movies, movie]);
        setFormError({
            isTitleError: false,
            isDateError: false,
            isPosterError: false,
        });
        return true;
    }
    }
// ===========================================================================
    return (
        <div className={styles.container}>
            <div className={styles.Addmoviesapp__right}>
                <img
                  className={styles.form__image}
                  src="https://picsum.photos/id/237/200/300"
                  alt=""
                />
            </div>
    
            <div className={styles.Addmoviesapp__left}>
                <h2 className={styles.Addmoviesapp_notes}> Add Movie App</h2>
                {/* buat event onsubmit */}
                <form onSubmit={handleSubmit}>
                    <div className={styles.form__title}>
                        <label htmlFor="notes">Title Movie</label>
                        <input className={styles.form__teks} placeholder="insert your Tittle Movie" id="notes" type="text" value={title} onChange={handleTitle} />
                    {isTitleError && <span>Tittle wajib di isi</span>}
                    </div>
    
                    <div className={styles.form__title}>
                        <label htmlFor="year">Year</label>
                        <input className={styles.form__teks} placeholder="insert your Years Movie" id="year" type="text" value={date} onChange={handleDate} />
                        {isDateError && <span>Date wajib di isi</span>}
                    </div>

                    <div className={styles.form__title}>
                        <label htmlFor="tipe">Tipe</label>
                        <select className={styles.form__teks} id="tipe" onChange={handleTipe} value={tipe}>
                            <option>Silahkan Pilih Salah Satu Tipe Movie </option>
                                <option value="Animasi">Animasi</option>
                                <option value="Action">Action</option>
                                <option value="Comedy">Comedy</option>
                                <option value="Drama">Drama</option>
                                <option value="Horror">Horror</option>
                            </select>
                    </div>

                    <div className={styles.form__title}>
                        <label htmlFor="poster">Poster</label>
                        <input className={styles.form__teks} placeholder="insert your Poster Movie" id="poster" type="text" value={poster} onChange={handlePoster} />
                        {isPosterError && <span>Poster wajib di isi</span>}
                    </div>
                    <Button full variant="orange">Submit</Button>
                </form>
            </div>
        </div>
        );    
}
export default AddMoviesApp;