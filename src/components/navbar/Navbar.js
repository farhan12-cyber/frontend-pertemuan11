/**
 * Import CSS Module Navbar.
 * Disimpan di object styles.
 */
import { Link } from "react-router-dom";
import {H1} from "../ui/heading";
import StyledNavbar from "../ui/nav/styled.navbar";
import styles from "./Navbar.module.css";

 function Navbar() {
   /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
   return (
     <div className={styles.container}>
       <StyledNavbar>
         <div>
           <H1>Hannn Movie</H1>
         </div>
         <div>
           <ul>
             <li>
               <Link to="/">Home</Link>
             </li>
             <li>
               <Link to="/movie/create">Add Movie</Link>
             </li>
             <li>
               <Link to="/movie/popular">Popular</Link>
              </li>
             <li>
             <Link to="/movie/now">Now Playing</Link>
             </li>
             <li>
             <Link to="/movie/top">Top Rated</Link>
             </li>
           </ul>
         </div>
       </StyledNavbar>
     </div>
   );
 }
 
 export default Navbar;