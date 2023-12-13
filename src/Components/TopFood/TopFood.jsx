import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
    const [topFoodItem, setTopFoodItem] = useState([])
    // console.log(topFoodItem)

    const url = `https://b8a11-server-side-alauddin-24434-7g3ompu7j.vercel.app/topFood?topFood=top`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTopFoodItem(data))


    }, [url])
    return (
        <div className="max-w-[6xl] mx-auto my-8">
            <h1 className="text-5xl font-semi-bold mb-8  text-orange-600" >Top Foods</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
                {
                    topFoodItem?.map(foods => 
                        <div key={foods._id} className="card w-full bg-slate-white md:w-96 rounded-md h-96 glass">
                        <div className="p-2">
                        <figure>
                             <img
                                 className="w-full  rounded-md  object-cover h-40"
                                 src={foods.foodImage}
                                 alt="car!"
                             />
                         </figure>
                        </div>
                         <div className="card-body flex justify-center items-center p-1">
                             
                                 <p className="card-title ">{foods.foodName}</p>
                                 <p>Price :{foods.price}</p>
                             
                             <div>
                                 <p>{foods.category}</p>
                             </div>
                          
                                 <p>Stock: {foods.quantityAvailable}</p>
                                 <Link to={`/singleDetails/${foods._id}`}>
                                     <button className=" bg-orange-400 px-4 py-1 rounded-md">
                                         Details 
                                     </button>
                                 </Link>
                            
                         </div>
                     </div>)
                }


            </div>
            <div className="flex justify-center my-8">
                <Link to={'/allFood'}> <button className="btn">See All</button></Link>
            </div>
        </div>
    );
};

export default TopFood;