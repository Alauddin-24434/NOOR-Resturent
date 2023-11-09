import {  useContext, useEffect, useState } from "react";

import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";

import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddedItems = () => {
    const {authUser, }=useContext(AuthContext)
    const [data, setTopFoodItem] = useState([])
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Number of items to display per page

    // // Initialize a state variable to track whether data is found
    const [dataFound, setDataFound] = useState(true);

    // // Step 3: Filter the data based on the search query
    const filteredData = data?.filter((food) =>
        food.foodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // // Handle search when the "Enter" key is pressed
    const handleSearch = () => {
        // Update the dataFound state based on whether there are matching results
        setDataFound(filteredData.length > 0);
    }

    // // Calculate the indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

  

    // // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // // Create an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

   
    

    const url = ` http://localhost:5000/addedUser?email=${authUser?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setTopFoodItem(data))


    }, [url])
   
    return (
        <div>
            <div className="my-6 flex">
                <form>
                    <div className="input-group">
                        <input
                            type="text"
                            placeholder="Food Name Search here"
                            name="name"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)} // Step 4: Use onChange
                            onKeyUp={(e) => {
                                if (e.key === 'Enter') {
                                    handleSearch();
                                }
                            }}
                            className="input input-bordered w-96"
                        />
                        <span className="input-icon" onClick={handleSearch}>
                            <AiOutlineSearch />
                        </span>
                    </div>
                </form>
            </div>

            {dataFound ? (
                <div>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredData?.slice(startIndex, endIndex).map((foods) => (
                            <div key={foods._id} className="card w-full rounded-none h-72 glass">
                                <figure>
                                    <img
                                        className="w-full object-cover h-48"
                                        src={foods.foodImage}
                                        alt="car!"
                                    />
                                </figure>
                                <div className="card-body p-1">
                                    <div className="flex justify-between bg-red-400">
                                        <p className="card-title ">{foods.FoodName}</p>
                                        <p>{foods.price}</p>
                                    </div>
                                    <div>
                                        <p>{foods.category}</p>
                                    </div>
                                    <div className="flex justify-between">
                                        <p>Stock: {foods.quantityAvailable}</p>
                                        <Link to={`/updateRoute/${foods._id}`}>
                                            <button className="btn rounded-none">
                                                Update <AiOutlineArrowRight />
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    {/* Pagination Controls */}
                    <div className="flex gap-8 justify-center my-4">
                        <button
                            onClick={() => setCurrentPage(currentPage - 1)}
                            disabled={currentPage === 1}
                          
                        >
                            Previous
                        </button>
                        {pageNumbers.map((pageNumber) => (
                            <button
                                key={pageNumber}
                                onClick={() => setCurrentPage(pageNumber)}
                                className={currentPage === pageNumber ? "text-red-400 font-semibold" : ""}
                            >
                                {pageNumber}
                            </button>
                        ))}
                        <button
                            onClick={() => setCurrentPage(currentPage + 1)}
                            disabled={endIndex >= filteredData.length}
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <p>Data not found.</p>
            )}
        </div>
    );
};

export default AddedItems;

 