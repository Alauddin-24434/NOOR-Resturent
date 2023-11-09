import Banner from "../Components/Banner/Banner";
import ContactUs from "../Components/Contact/ContactUs";
import Slideshow from "../Components/Slideshow/Slideshow";

import TopFood from "../Components/TopFood/TopFood";
<script src="assets/js/swiper-bundle.min.js"></script>

const Home = () => {


    return (
        <div className="">
            <Banner></Banner>
            {/* top food collection store import hare  */}
            <TopFood></TopFood>
           
            <div className="">
            <Slideshow></Slideshow>
            <ContactUs></ContactUs>
            </div>
            
        </div>
    );
};

export default Home;