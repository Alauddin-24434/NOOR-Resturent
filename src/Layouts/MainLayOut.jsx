import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import Footer from "../Shared/Footer";


const MainLayOut = () => {
    return (
        <div className="max-w-[1200px] mx-auto">
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className=""><Footer></Footer>

            </div>
        </div>
    );
};

export default MainLayOut;