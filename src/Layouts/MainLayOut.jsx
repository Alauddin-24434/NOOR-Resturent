import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayOut = () => {
    return (
        <div className="max-w-[1200px] mt-4 bg-white mx-auto">
            <Navbar></Navbar>
            <div className="mt-4">
            <Outlet></Outlet>
            </div>
            <Footer></Footer>


        </div>
    );
};

export default MainLayOut;