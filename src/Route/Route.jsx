import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayOut from "../Layouts/MainLayOut";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import SingleFoodDetails from "../Shared/SingleFoodDetails";
import OrderingPage from "../Pages/OrderingPage";
import UserProfile from "../Pages/UserProfile";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AddedItems from "../Components/Profile/AddedItems";
import AddItem from "../Components/Profile/AddItem";
import OrderItem from "../Components/Profile/OrderItem";

import Error404 from "../Pages/Error404";
import UpdateRoute from "../Components/Profile/UpdateRoute";


const myRoute = createBrowserRouter([
    {
        path: '/',
        element: <MainLayOut></MainLayOut>,
        errorElement:<Error404></Error404>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'allFood',
                element: <AllFoodItems></AllFoodItems>,
               
            },
            {
                path: 'blog',
                element: <Blog></Blog>
            },
            {
                path: 'userProfile',
                element: <UserProfile></UserProfile>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
            {
                path: 'signUp',
                element: <SignUp></SignUp>
            },
            {
                path: '/addedItems',
                element: <AddedItems></AddedItems>
            },
            {
                path: 'addItem',
                element: <AddItem></AddItem>
            },
            {
                path: 'orderItems',
                element: <OrderItem/>,
               
            },
            {
                path: 'singleDetails/:id',
                element: <PrivateRoute><SingleFoodDetails></SingleFoodDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleDetails/${params.id}`)

            },
            {
                path: '/orderingPage/:id',
                element: <OrderingPage></OrderingPage>,
                loader: ({ params }) => fetch(`http://localhost:5000/singleDetails/${params.id}`)
            },
            {
                path: '/updateRoute/:id',
                element:<UpdateRoute></UpdateRoute>,
                loader:({params})=> fetch(`http://localhost:5000/userUpdate/${params.id}`)
            }

        ]

    }
])

export default myRoute