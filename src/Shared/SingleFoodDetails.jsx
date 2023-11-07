// import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
    const load = useLoaderData()
    const {_id, Image,FoodName,Price,Category}=load || {}
    console.log(load)
 
    return (
        <div className="my-6">
        <div className="card lg:card-side bg-base-100 shadow-xl h-96">
          <div className="card-body">
            <h2 className="card-title">{FoodName}</h2>
            <div>
              <p>{Category}</p>
              <p>{Price}</p>
              <p>Bangladesh</p>
            </div>
            <div className="card-actions">
             <Link to={`/orderingPage/${_id}`}><button className="btn">Order</button></Link>
            </div>
          </div>
          <figure><img className="w-96" src={Image} alt="Album" /></figure>
        </div>
      </div>
    );
};

export default SingleFoodDetails;