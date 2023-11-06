// import axios from "axios";
import { Link, useLoaderData } from "react-router-dom";

const SingleFoodDetails = () => {
    const load = useLoaderData()
    const { Image,FoodName,Price,Category}=load || {}
    console.log(load)
    // const handleOrder=()=>{
    //     const order={ Image,FoodName,Price,Category}
    //     axios.post('http://localhost:5000/carts',order)
    //     .then(res=>{
    //         console.log(res.data)
           
    //     })
    // }
    return (
        <div className="my-6">
            <div className="card lg:card-side bg-base-100 shadow-xl h-96">
                
                <div className="card-body ">
                    <h2 className="card-title">{FoodName}</h2>
                    <div>
                    <p>{Category}</p>
                    <p>{Price}</p>
                    <p>Bangladeh</p>
                    </div>
                    {/* <div className="card-actions ">
                      <Link>  <button onClick={handleOrder} className="btn ">Order</button></Link>
                    </div> */}

                    <div className="card-actions ">
                      <Link to={'/orderingPage'}>  <button className="btn ">Order</button></Link>
                    </div>
                </div>
                <figure><img className="w-96" src={Image} alt="Album" /></figure>
            </div>
        </div>
    );
};

export default SingleFoodDetails;