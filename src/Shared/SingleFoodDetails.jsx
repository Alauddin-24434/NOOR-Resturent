import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
    const load = useLoaderData()
    const { Image,FoodName,Price,Category}=load || {}
    console.log(load)
    const handleOrder=()=>{
        const order={ Image,FoodName,Price,Category}
        axios.post('http://localhost:5000/carts',order)
        .then(res=>{
            console.log(res.data)
           
        })
    }
    return (
        <div className="my-6">
            <div className="card lg:card-side bg-base-100 shadow-xl h-96">
                
                <div className="card-body">
                    <h2 className="card-title">New album is released!</h2>
                    <p>Click the button to listen on Spotiwhy app.</p>
                    <div className="card-actions ">
                      <Link to={'/orderingPage'}>  <button onClick={handleOrder} className="btn btn-primary">Listen</button></Link>
                    </div>
                </div>
                <figure><img className="w-96" src={Image} alt="Album" /></figure>
            </div>
        </div>
    );
};

export default SingleFoodDetails;