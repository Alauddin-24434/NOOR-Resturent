import { useContext, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../AuthProvider/AuthProvider";

const OrderingPage = () => {
    const { authUser } = useContext(AuthContext)
  
    const load = useLoaderData();

    const { foodName,foodImage, price, quantityAvailable } = load || {};
    const [productCount, setProductCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(price); // Initialize newPrice with the default Price
    let todayDate= new Date();
    let dd=String(todayDate.getDate()).padStart(2,'0');
    let mm=String(todayDate.getMonth()+1).padStart(2,'0');
    let yyyy=todayDate.getFullYear();
    todayDate=mm+ '/' + dd + '/' + yyyy;
    console.log(todayDate)
    const handleSubmit = (event) => {
        event.preventDefault();

        if (productCount > quantityAvailable) {
            Swal.fire({
                title: 'Error!',
                text: 'Not Available food item.',
                icon: 'error',
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
            });
            return; // Exit the function and do not add the item
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

        fetch(' http://localhost:5000/orderingPage', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(orderingFoods),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: "Food Order successfully!",
                        icon: 'success',
                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',
                    });
                }
            });
    };

    // Function to handle quantity change and update the price
    const handleFoodPriceChange = (updateCountQuantity) => {
        setProductCount(updateCountQuantity);
        setTotalPrice(price * updateCountQuantity); // Recalculate the new price
    };

    return (


        <>
{
    authUser && 
    <div className="w-full max-w-sm p-4 bg-red-300 border border-gray-200 rounded-lg shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700">
        <h5 className="mb-4 text-xl font-medium text-gray-500 dark:text-gray-400">{foodName}</h5>


        <ul role="list" className="space-y-5 my-7">
            <li className="flex space-x-3 items-center">

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Price: {totalPrice}</span>
            </li>
            <li className="flex space-x-3">

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Available Quantity: {quantityAvailable}</span>
            </li>
            <li className="flex space-x-3">

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">{authUser.displayName}</span>
            </li>
            <li className="flex space-x-3">

                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400"><p className="text-sm">{authUser.email}</p> </span>
            </li>


            <li className="flex justify-between gap-4 items-center decoration-gray-500 ">
                <div>
                    <p className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">Add Count: {productCount}</p>
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
}



        </>

    );
};

export default OrderingPage;
