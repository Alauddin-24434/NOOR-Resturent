import { AiOutlineArrowRight } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAllFoods from "../hooks/useAllFoods";
import { useState } from "react";

const AllFoodItems = () => {
    const { data, isLoading } = useAllFoods();
    const [searchQuery, setSearchQuery] = useState(''); // Step 1

   
    // Step 3: Filter the data based on the search query
    const filteredData = data?.filter((food) =>
        food.FoodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (isLoading === true) {
        return <span className=" loading loading-infinity loading-lg"></span>;
    }

    return (
        <div>
            <div className="my-6">
                <form>
                    <input
                        type="text"
                        placeholder="Food Name Search here"
                        name="name"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Use onChange
                        className="input input-bordered w-full max-w-xs"
                    />
                </form>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {filteredData?.map((foods) => (
                    <div key={foods._id} className="card w-full rounded-none h-72 glass">
                        <figure>
                            <img
                                className="w-full object-cover h-48"
                                src={foods.Image}
                                alt="car!"
                            />
                        </figure>
                        <div className="card-body p-1">
                            <div className="flex justify-between bg-red-400">
                                <p className="card-title ">{foods.FoodName}</p>
                                <p>{foods.Price}</p>
                            </div>
                            <div>
                                <p>{foods.Category}</p>
                            </div>
                            <div className="flex justify-between">
                                <p>{foods.Category}</p>
                                <Link to={`/singleDetails/${foods._id}`}>
                                    <button className="btn rounded-none">
                                        Details <AiOutlineArrowRight />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllFoodItems;
