import { AiOutlineArrowRight, AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";
import useAllFoods from "../hooks/useAllFoods";
import { useState } from "react";

const AllFoodItems = () => {
    const { data, isLoading } = useAllFoods();
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 9; // Number of items to display per page

    // Initialize a state variable to track whether data is found
    const [dataFound, setDataFound] = useState(true);

    // Step 3: Filter the data based on the search query
    const filteredData = data?.filter((food) =>
        food.FoodName.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Handle search when the "Enter" key is pressed
    const handleSearch = () => {
        // Update the dataFound state based on whether there are matching results
        setDataFound(filteredData.length > 0);
    }

    // Calculate the indexes for the current page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    if (isLoading === true) {
        return <span className=" loading loading-infinity loading-lg"></span>;
    }

    // Calculate the total number of pages
    const totalPages = Math.ceil(filteredData.length / itemsPerPage);

    // Create an array of page numbers
    const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

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
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {filteredData?.slice(startIndex, endIndex).map((foods) => (
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
                                        <p>Stock: {foods.Quantity}</p>
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
                                className={currentPage === pageNumber ? "active" : ""}
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

export default AllFoodItems;
