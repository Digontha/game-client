import { Banner } from "../../Shared/Banner/Banner";
import Navbar from "../../Shared/Navbar/Navbar";
import Games from "./Games/Games";


const Home = () => {
    return (
        <div>
            
            <Navbar></Navbar>
            <Banner></Banner>
            <Games></Games>
        </div>
    );
};

export default Home;