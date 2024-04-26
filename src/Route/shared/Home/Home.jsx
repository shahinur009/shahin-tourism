import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import Footer from "../../../Components/Footer";
import Banner from "../../../Components/Banner";

const Home = () => {
    return (
        <div className="w-full my-10 px-10">
            <Navbar></Navbar>
            <Banner></Banner>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Home;