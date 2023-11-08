
import { useContext } from "react";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const AddItem = () => {
    const { authUser } = useContext(AuthContext)
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const foodName = form.FoodName.value;
        const foodImage = form.Image.value;
        const price = form.Price.value;
        const category = form.Category.value;
        const quantityAvailable = form.Quantity.value;
        const foodOrigin = form.Origin.value;

        const shortDescription = form.ShortDescription.value;



        const addFoodUser = {
            userName: authUser?.displayName,
            email: authUser?.email,
            foodName,
            category,
            foodImage,
            price,
            foodOrigin,
            shortDescription,
           quantityAvailable:Number(quantityAvailable)
        };
        // console.log(addFoodUser)

        fetch('   http://localhost:5000/users', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addFoodUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Product add successfully!",
                        icon: 'success',

                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',

                    })
                }
            })

    }
    return (


        <div className="border ">
            <form onSubmit={handleSubmit}>
                <div className="grid gap-6 items-center  mb-6 grid-cols-4">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Food Name</label>
                        <input type="text" id="" name="FoodName" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter category name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Food Image</label>
                        <input type="url" id="" name="Image" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter category name" required />
                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Food Category</label>
                        <input type="text" id="" name="Category" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter brand name" required />
                    </div>

                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Quantity</label>

                        <input type="text" id="" name="Quantity" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter product type" required />

                    </div>


                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Price</label>
                        <input type="text" id="" name="Price" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 disabled dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter product price" />
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
                        <input type="text" id="" name="Origin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter short description" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 label dark:text-white">Short Description</label>
                        <input type="text" id="" name="ShortDescription" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter short description" required />
                    </div>







                </div>


                <div>

                    <input type="submit" value="ADD BRAND ITEM" className="bg-red-300 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>



            </form>
        </div>

    );
};

export default AddItem;