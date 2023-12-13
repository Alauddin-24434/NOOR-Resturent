// import axios from "axios";
import { Helmet } from "react-helmet";
import { Link, useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
  const load = useLoaderData()
  const { _id, foodOrigin, foodImage, foodName, price, category, shortDescription} = load || {}
  console.log(load)

  return (
    <div className="my-6">
      <Helmet>

        <title>Details</title>

      </Helmet>
      <div className="card lg:card-side bg-base-100 shadow-xl h-96">
        <div className="card-body">
          <h2 className="card-title">Food name: {foodName}</h2>
          <div>
            <p>Category: {category}</p>
            <p>Price: {price}</p>
            <p>Food Origin : {foodOrigin}</p>
            <p>
            Dscription :{shortDescription}
            </p>
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