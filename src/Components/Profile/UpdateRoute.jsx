import { useContext, useState } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet";

const UpdateRoute = () => {
  const updateRouteLoad = useLoaderData();
  const { _id, foodImage, foodName, foodOrigin, category, quantityAvailable, price, shortDescription } = updateRouteLoad || {};
  const { authUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    try {
      const form = event.target;
      const foodName = form.FoodName.value;
      const foodImage = form.Image.value;
      const price = form.Price.value;
      const category = form.Category.value;
      const quantityAvailable = form.Quantity.value;
      const foodOrigin = form.Origin.value;
      const shortDescription = form.ShortDescription.value;

      const updateData = {
        userName: authUser?.displayName,
        email: authUser?.email,
        foodName,
        category,
        foodImage,
        price,
        foodOrigin,
        shortDescription,
        quantityAvailable: Number(quantityAvailable),
      };

      const response = await fetch(`https://b8a11-server-side-alauddin-24434-9sbxqbkzk.vercel.app/userUpdate/${_id}`, {
        method: 'PUT',
        headers: {
          'content-type': 'application/json',
        },
        body: JSON.stringify(updateData),
      });

      if (!response.ok) {
        throw new Error('Failed to update food');
      }

      const data = await response.json();
      console.log('Data:', data);

      if (data.modifiedCount > 0) {
        Swal.fire({
          title: 'Success!',
          text: 'Food Update successfully!',
          icon: 'success',
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
        });
      }
    } catch (error) {
      console.error('Error updating food:', error.message);
      setError('Failed to update food');
    } finally {
      setLoading(false);
    }
  };

 return (
    <div className="border">
      <Helmet>
        <title>Added</title>
      </Helmet>
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      <form onSubmit={handleSubmit}>
  <div className="grid gap-6 items-center  mb-6 grid-cols-4">
      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Food Name</label>
          <input type="text" id="" name="FoodName" defaultValue={foodName} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter category name" required />
      </div>
      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Food Image</label>
          <input type="url" id="" name="Image" defaultValue={foodImage} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter category name" required />
      </div>


      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Food Category</label>
          <input type="text" id="" name="Category" defaultValue={category} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter brand name" required />
      </div>

      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Quantity</label>

          <input type="text" id="" name="Quantity" defaultValue={quantityAvailable} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter product type" required />

      </div>


      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Price</label>
          <input type="text" id="" name="Price" defaultValue={price} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 disabled dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter product price" />
      </div>
      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Made By</label>
          <div className="border border-spacing-2 rounded-md text-sm pl-2">
              <p>{authUser?.displayName}</p>
              <p>{authUser?.email}</p>
          </div>
      </div>
      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Origin(Country)</label>
          <input type="text" id="" name="Origin" defaultValue={foodOrigin} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter short description" required />
      </div>
      <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Short Description</label>
          <input type="text" id="" name="ShortDescription" defaultValue={shortDescription} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter short description" required />
      </div>







  </div>


  <div>

      <input type="submit" value="Update Confirm" className="bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
  </div>



</form>
    </div>
  );
};

export default UpdateRoute;