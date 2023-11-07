import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const TopFood = () => {
    const [topFoodItem, setTopFoodItem] = useState([])
    console.log(topFoodItem)

    const url = `http://localhost:5000/topFood?topFood=top`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTopFoodItem(data))


    }, [url])
    return (
     <div className="max-w-[6xl] mx-auto ">
           <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
            {
                topFoodItem?.map(toopFood => <div
                    className="h-96 w-full border" key={toopFood._id}>
                    <img className="object-cover  w-full h-64" src={toopFood.Image} alt="" />
                    <div>
                        <p>{toopFood.FoodName}</p>
                        <p>{toopFood.Category}</p>
                        <p>{toopFood.Price}</p>
                        <Link to={`/singleDetails/${toopFood._id}`} >   <button  className="btn rounded-none">Details</button></Link>
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