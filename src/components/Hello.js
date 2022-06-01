// membuat component hello
// mencetak UI(element)
// component adalah suatu kumpulan element
function Hello(props) {
    // diluar return adalah javascript biasa
    const {name, major} = props;
    // di dalam return adalah jsx atau content atau tag tag html yang akan di tampilkan kedalam website
    return(
        <div className = "hello">
            <h2>
                Hello React
            </h2>
            <p>Hallo nama saya adalah {name}</p>
            <p>Jurusan saya : {major}</p>
        </div>
    );
}
export default Hello;