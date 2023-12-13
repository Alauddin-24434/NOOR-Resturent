import { Helmet } from "react-helmet";
import Banner from "../Components/Banner/Banner";
import ContactUs from "../Components/Contact/ContactUs";
import Slideshow from "../Components/Slideshow/Slideshow";

import TopFood from "../Components/TopFood/TopFood";
import HealthAndWellnessMenu from "../Components/HealthAndWellnessMenu/HealthAndWellnessMenu";
import FarmToTableConcept from "../Components/FarmToTableConcept/FarmToTableConcept";
<script src="assets/js/swiper-bundle.min.js"></script>

const Home = () => {


    return (
        <div className="">
            <Helmet>

                <title>Home</title>

            </Helmet>
            <Banner></Banner>
            {/* top food collection store import hare  */}
            <TopFood></TopFood>
            <HealthAndWellnessMenu/>
            <FarmToTableConcept/>

            <div className="">
                <Slideshow></Slideshow>

                <ContactUs></ContactUs>
            </div>

        </div>
    );
};

export default Home;