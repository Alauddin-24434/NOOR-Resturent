import Banner from "../Components/Banner/Banner";
import Slideshow from "../Components/Slideshow/Slideshow";

import TopFood from "../Components/TopFood/TopFood";
<script src="assets/js/swiper-bundle.min.js"></script>

const Home = () => {


    return (
        <div className="bg-slate-300">
           <Banner></Banner>
            {/* top food collection store import hare  */}
            <TopFood></TopFood>
            <Slideshow></Slideshow>

        </div>
    );
};

export default Home;