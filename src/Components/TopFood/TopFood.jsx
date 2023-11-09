import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
    const [topFoodItem, setTopFoodItem] = useState([])
    // console.log(topFoodItem)

    const url = `http://localhost:5000/topFood?topFood=top`
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
                    topFoodItem?.map(topFood => <div
                        className="h-96 rounded-md w-full border" key={topFood._id}>
                        <img className="object-cover  w-full h-60" src={topFood.foodImage} alt="" />
                        <div className="text-lg font-medium">
                            <p className="mb-1 ">{topFood.foodName}</p>
                            <p className="mb-1">{topFood.category}</p>
                            <p  className="mb-1">Price :{topFood.price}</p>
                            <Link to={`/singleDetails/${topFood._id}`} >   <button className="btn rounded-none">Details</button></Link>
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