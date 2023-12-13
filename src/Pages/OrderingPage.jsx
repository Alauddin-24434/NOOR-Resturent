import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet";

const OrderingPage = () => {
    const { authUser } = useContext(AuthContext)
    const load = useLoaderData();
    const { _id, foodOrigin, topFood, foodName, foodImage, price, quantityAvailable, category, madeByName, shortDescription } = load || {};

    const [quantityCount, setQuantityCount] = useState(quantityAvailable);
    const [productCount, setProductCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0); // Initialize totalPrice with 0

    let todayDate = new Date();
    let dd = String(todayDate.getDate()).padStart(2, '0');
    let mm = String(todayDate.getMonth() + 1).padStart(2, '0');
    let yyyy = todayDate.getFullYear();
    todayDate = mm + '/' + dd + '/' + yyyy;
    // console.log(todayDate)




    const handleSubmit = async (event) => {
        event.preventDefault();
        if (productCount === 0 || totalPrice === 0) {
            Swal.fire({
                title: 'Error!',
                text: 'Please add at least 1 product to confirm the order.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            });
            return;
        }

        if (productCount > quantityAvailable) {
            Swal.fire({
                title: 'Error!',
                text: 'Not Available food item.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            });
            return;
        }


        const orderingFoods = {
            foodImage,
            userName: authUser?.displayName,
            email: authUser?.email,
            totalPrice: Number(totalPrice.toFixed(2)),
            foodName,
            productCount,
            OrderDateTime: todayDate,
        };

        // console.log(orderingFoods);

        // You can make an API request here to update the item on the server.
        // For now, it's commented out.

      try {
    const response = await fetch(`https://b8a11-server-side-alauddin-24434-9sbxqbkzk.vercel.app/orderingPage`, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(orderingFoods),
    });

    const data = await response.json();

    if (data.insertedId) {
        Swal.fire({
            title: 'Success!',
            text: "Food Order successfully!",
            icon: 'success',
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
        });
    }

    UpdateHandler();
} catch (error) {
    console.error('Error:', error);
    // Handle error as needed
}



    };
    const UpdateHandler = () => {


        const Data = {
            foodName: foodName,
            quantityAvailable: quantityCount,
            category: category,
            price: price,
            madeByName: madeByName,
            shortDescription: shortDescription,
            topFood: topFood,
            foodOrigin: foodOrigin,
            foodImage: foodImage,
        };
        console.log(Data)
        fetch(`https://b8a11-server-side-alauddin-24434-9sbxqbkzk.vercel.app /singleFoods/${_id}`, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(Data)
        })
            .then(res => res.json())

            .then(data => {
                console.log(data)
            })


    }


    const handleFoodPriceChange = (updateCountQuantity) => {
        // Check if the updateCountQuantity is valid (not less than 0) and available quantity is greater than 0
        if (updateCountQuantity >= 0 && quantityAvailable > 0) {
            setProductCount(updateCountQuantity);
            setTotalPrice(price * updateCountQuantity);
            setQuantityCount(quantityCount - 1);
        } else {
            // Show an error message if available quantity is 0
            Swal.fire({
                title: 'Error!',
                text: 'No more quantity available.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            });
        }
    };



    return (



        <div className="flex w-full h-auto md:h-96 justify-center md:justify-between items-center  flex-col overflow-hidden  md:flex-row-reverse">
            <Helmet>

                <title>Order</title>

            </Helmet>

            <div className="w-full md:w-1/2  p-4 font-medium bg-indigo-500 text-white border border-gray-200 rounded-lg shadow sm:p-8 ">
                <h5 className="mb-4 text-xl font-medium ">{foodName}</h5>


                <ul role="list" className="space-y-5 my-7">
                    <li className="flex space-x-3 items-center">

                        <span className="text-base font-normal leading-tight ">Price: {price}</span>
                    </li>

                    <li className="flex space-x-3">

                        <span className="text-base font-normal leading-tight ">Available Quantity: {quantityCount}</span>
                    </li>
                    <li className="flex space-x-3">

                        <span className="text-base font-normal leading-tight ">{authUser?.displayName}</span>
                    </li>
                    <li className="flex space-x-3">

                        <span className="text-base font-normal leading-tight"><p className="text-sm">{authUser?.email}</p> </span>
                    </li>
                    <li className="flex space-x-3 items-center">

                        <span className="text-base font-normal leading-tight ">Total Price: {totalPrice == 0 ? price : totalPrice}</span>
                    </li>

                    <li className="flex justify-between gap-4 items-center  ">
                        <div>
                            <p className="text-base font-normal leading-tight ">Add Count: {productCount}</p>
                        </div>
                        <div className="flex gap-4">
                            <button onClick={() => handleFoodPriceChange(productCount - 1)} className="btn to-primary">
                                -
                            </button>
                            <button onClick={() => handleFoodPriceChange(productCount + 1)} className="btn to-primary">
                                +
                            </button>
                        </div>
                    </li>
                </ul>
                <button className="w-full btn btn-success" onClick={handleSubmit}>Order Confirm</button>
            </div>
            <div className="w-full md:w-1/2 ">
                <img className="w-full h-full object-cover" src={foodImage} alt="" />
            </div>




        </div>


    );
};

export default OrderingPage;
