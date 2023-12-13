import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";
import Swal from "sweetalert2";

const AddedItems = () => {
  const { authUser } = useContext(AuthContext);
  const [foodUpdateRemaining, setFoodUpdateRemaining] = useState([]);

   
  useEffect(() => {
    const fetchData = async () => {
        try {
            const response = await fetch(`https://b8a11-server-side-alauddin-24434-9sbxqbkzk.vercel.app/addedUser?email=${authUser?.email}`);
            
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }

            const data = await response.json();
            setFoodUpdateRemaining(data);
        } catch (error) {
            console.error('Error fetching data:', error.message);
            // You can add additional error handling here, like displaying an error message to the user.
        }
    };

    fetchData();
}, [authUser]);

const handleDelete = (_id) => {
    console.log("Deleting item with _id:", _id);

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
    }).then((result) => {
        if (result.isConfirmed) {
            // Delete on the client side
            fetch(`https://b8a11-server-side-alauddin-24434-9sbxqbkzk.vercel.app/deleteSingle/${_id}`, {
                method: "DELETE",
            })
                .then((res) => res.json())
                .then((data) => {
                    console.log("Server response:", data);
                    if (data.deletedCount > 0) {
                        Swal.fire("Deleted!", "Your file has been deleted.", "success");
                        const watchRemaining = foodUpdateRemaining?.filter((wat) => wat._id !== _id);
                        setFoodUpdateRemaining(watchRemaining);
                        // Update local storage after deletion
                        localStorage.setItem("foodUpdateRemaining", JSON.stringify(watchRemaining));
                    } else {
                        Swal.fire("Error!", "Failed to delete the item.", "error");
                    }
                })
                .catch((error) => {
                    console.error("Error deleting item:", error);
                    Swal.fire("Error!", "Failed to delete the item. Please try again later.", "error");
                });
        }
    });
};

  return (
    <div>
      <Helmet>
        <title>Added</title>
      </Helmet>

      {foodUpdateRemaining ? (
        <div>
          <div className="grid my-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {foodUpdateRemaining?.map((foods) => (
              <div key={foods._id} className="card w-full bg-slate-white md:w-72 rounded-md h-96 glass">
                <div className="">
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
               <div className="flex flex-row gap-4">
              
                  <button onClick={() => handleDelete(foods._id)} className=" bg-red-400 px-4 py-1 rounded-md">
                    Delete
                  </button>
                  <Link to={`/updateRoute/${foods._id}`}>
                    <button className=" bg-green-100 px-4 py-1 rounded-md">Update</button>
                  </Link>
               </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <p>Data not found.</p>
      )}
    </div>
  );
};

export default AddedItems;
