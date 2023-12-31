
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Error404 = () => {
  return (
    <div className="hero h-screen bg-base-200 object-cover p-4" style={{ backgroundImage: 'url(image/404.png)' }}>
       <Helmet>
                <title>Error</title>
            </Helmet>
        <div className="w-full relative h-full ">
        
          <Link to="/">
            <button className="btn btn-outline btn-warning mt-4">Back To Home</button>
          </Link>
   
      </div>
    </div>
  );
};

export default Error404;
