// import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
    const load = useLoaderData()
    const {_id, foodOrigin,foodImage,foodName,price,category}=load || {}
    console.log(load)
 
    return (
        <div className="my-6">
        <div className="card lg:card-side bg-base-100 shadow-xl h-96">
          <div className="card-body">
            <h2 className="card-title">{foodName}</h2>
            <div>
              <p>{category}</p>
              <p>{price}</p>
              <p>{foodOrigin}</p>
            </div>
            <div className="card-actions">
             <Link to={`/orderingPage/${_id}`}><button className="btn">Order</button></Link>
            </div>
          </div>
          <figure><img className="w-96" src={foodImage} alt="Album" /></figure>
        </div>
      </div>
    );
};

export default SingleFoodDetails;