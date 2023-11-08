import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { TbTruckDelivery,} from 'react-icons/tb';
import { MdOutlinePayments } from 'react-icons/md';
import { LuPhoneCall } from 'react-icons/lu';
import { RiMenuAddFill } from 'react-icons/ri';
import { Link } from "react-router-dom";

const OrderItem = () => {
    const { authUser } = useContext(AuthContext)
    const [cartUpadete, setCartUpdate] = useState([])
    // console.log(cartUpadete)
    // greeting condition user
    const now = new Date();
    const currentHour = now.getHours();

    let greeting;

    if (currentHour >= 6 && currentHour < 12) {
        greeting = 'Good morning!';
    } else if (currentHour >= 12 && currentHour < 18) {
        greeting = 'Good afternoon!';
    } else if (currentHour >= 18 && currentHour < 22) {
        greeting = 'Good evening!';
    } else {
        greeting = 'Good night!';
    }

    // console.log(greeting);

    const url = ` http://localhost:5000/carts?UserEmail=${authUser?.email}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setCartUpdate(data))
    }, [url]);

    return (
        <div className="grid grid-cols-8">
            <div className="col-span-2 ">
                <ul role="list" className="space-y-5 p-4 my-7">

                    <li className="flex space-x-3">
                        <div className="avatar">
                            <div className="w-12 rounded-xl">
                                <img src={authUser?.photoURL} />
                            </div>
                        </div>
                        <div>
                            <p>{authUser?.displayName}</p>
                            <p>{greeting}</p>
                        </div>
                    </li>
                    <li className="flex space-x-3 ">
                        <Link to={'/orderItems'}><div className="flex gap-2 items-center">
                            <p className="text-2xl"><RiMenuAddFill /></p>
                            <p>Our Menu</p>
                        </div></Link>
                    </li>
                    <li className="flex space-x-3">
                        <div className="flex gap-2 items-center">
                            <p className="text-2xl"><TbTruckDelivery /></p>
                            <p>Delivery</p>
                        </div>
                    </li>
                    <li className="flex space-x-3">
                    <div className="flex gap-2 items-center">
                            <p className="text-2xl"><MdOutlinePayments/></p>
                            <p>Payment</p>
                        </div>
                    </li>
                    <li className="flex space-x-3">
                    <div className="flex gap-2 items-center">
                            <p className="text-2xl"><LuPhoneCall/></p>
                            <p>Contacts</p>
                        </div>
                    </li>



                </ul>
            </div>
           
            <div className="col-span-6 flex flex-col gap-6 bg-slate-400 p-6">
            {
                    cartUpadete?.map(order =>
                        <div key={order._id} className="flex w-4xl h-32 flex-col items-center   border border-gray-200 rounded-lg shadow md:flex-row  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            <img className="object-cover  rounded-t-lg h-32  w-28 md:rounded-none md:rounded-l-lg" src={order.foodImage} alt="" />
                            <div className="cart cart-body">

                                <div className="flex flex-row justify-center gap-12  items-center ">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{order.foodName}</h5>
                                    <h2 className="float-right">{order.totalPrice}</h2>
                                </div>
                                <div>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{order.OrderDateTime}</p>
                                </div>
                            </div>
                        </div>

                    )
                }
            </div>
        </div>
    );
};

export default OrderItem;