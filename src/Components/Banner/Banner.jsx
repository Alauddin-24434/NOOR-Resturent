import { Link } from "react-router-dom";

const Banner = () => {
    return (
        <div>
            <div className="hero h-full md:h-[500px] bg-base-200 object-cover" style={{backgroundImage: 'url(/src/assets/inage/banner1.jpg)'}}>
                <div className="hero-content grid grid-cols-4">
                  
                    <div className="col-span-2">
                     
                        <h1 className="text-2xl md:text-5xl  text-orange-600 font-medium">Speacial Menu</h1>
                        <p className="py-6 text-white">Our diverse menu boasts a fusion of classic brunch favorites and innovative dishes. Whether you are craving the timeless perfection of a stack fluffy pancakes drizzled in real maple syrup or tempted by our signature avocado toast topped with poached eggs, every bite is an experience to remember.   </p>
                       
                       
                    <Link to={'/AllFood'}>    <button className="btn border-none w-40  hover:bg-orange-600">All Menu</button></Link>


                    </div>
                    <div className="col-span-2"></div>
                </div>
            </div>
        </div>
    );
};

export default Banner;