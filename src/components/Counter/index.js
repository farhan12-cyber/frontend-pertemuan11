import { useEffect, useState } from "react";

function Counter() {
    // Membuat state menggunakan usestate
    // memberikan nilai awal = 0
    // mengembalikan sepasang value dalam bentuk array :
    // - current state (nilai saat ini)
    // - fungsi untuk mengupdate state
    // membuat fungsi addangka di jalankan ketika button di klik
    function addangka() {
        setAngka(angka + 1);
    }
    function minangka() {
        setAngka (angka - 1);
    }
    // use effect
    function manipulateDOM() {
        console.log("Lifescycle : component dimount");
        document.title = 'Home';
    }
    // usestate membuat state
    const [angka,setAngka] = useState(0);
    // useEffect: melakukan side effect
    useEffect(manipulateDOM, [angka]);
    console.log(("lifecycle: component di render"));
    return(
        <div>
            <p>Hasil : {angka}</p>
            {/* Buat button tambah angka */}
            <button onClick={addangka}>Tambahin</button>
            {/* Buat button kurang angka */}
            <button onClick={minangka}>kurangin</button>
        </div>
    );
}
export default Counter;