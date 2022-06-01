/**
 * Import CSS Module Footer.
 * Disimpan di object styles.
 */
import { H4, Puter } from "../ui/footer";
import styles from "./Footer.module.css";

 function Footer() {
   /**
    * Menggunakan styles yang sudah diimport.
    * Memanggilnya menggunakan expression.
    */
   return (
     <div className={styles.container}>
       <footer className={styles.footer}>
         <H4>Movie App</H4>
         <Puter>Created by Muhammad Farhan</Puter>
       </footer>
     </div>
   );
 }
 
 export default Footer;