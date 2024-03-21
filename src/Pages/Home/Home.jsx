import { Banner } from "../../Shared/Banner/Banner";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import Games from "./Games/Games";


const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <Games></Games>
            <Footer></Footer>
        </div>
    );
};

export default Home;