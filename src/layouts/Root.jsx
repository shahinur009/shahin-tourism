import { Outlet } from "react-router-dom";
import Navbar from "../shared/Navbar/Navbar";
import Footer from "../Components/Footer";
import { useContext } from "react";
import { ThemeContext } from "../Provider/ThemeProvider";

const Root = () => {
    const {theme}=useContext(ThemeContext)
    return (
        <div className={theme?'dark':''}>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;