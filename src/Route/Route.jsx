import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home";
import MainLayOut from "../Layouts/MainLayOut";
import AllFoodItems from "../Pages/AllFoodItems";
import Blog from "../Pages/Blog";
import SingleFoodDetails from "../Shared/SingleFoodDetails";
import OrderingPage from "../Pages/OrderingPage";


const myRoute=createBrowserRouter([
    {
        path:'/',
        element: <MainLayOut></MainLayOut>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'allFood',
               element:<AllFoodItems></AllFoodItems>,
            //    loader:()=> fetch('http://localhost:5000/foods')
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            {
                path:'singleDetails/:id',
                element:<SingleFoodDetails></SingleFoodDetails>,
                loader:({params})=> fetch(`http://localhost:5000/singleDetails/${params.id}`)

            },
            {
                path:'orderingPage',
                element:<OrderingPage></OrderingPage>
            }

        ]
        
    }
])

export default myRoute