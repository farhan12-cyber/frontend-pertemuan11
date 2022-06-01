import Container from "../components/Container";
import Footer from "../components/footer/Footer";
import Navbar from "../components/navbar/Navbar";

function Layout(props){
    return (
        <div>
            <Navbar/>
            <main>
            <Container>{props.children}</Container>
            </main>
            <Footer/>
        </div>
    );
}
export default Layout;