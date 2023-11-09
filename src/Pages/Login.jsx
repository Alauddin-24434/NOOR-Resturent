import  { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';

const LoginPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { userLogin, signInWithGoogle } = useContext(AuthContext);

  const handleSignIn = async (event) => {
    event.preventDefault();

    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await userLogin(email, password);
      Swal.fire({
        title: 'Success!',
        text: 'User logged in successfully!',
        icon: 'success',
      });
      setTimeout(() => {
        navigate(location?.state ? location.state.from : '/');
      }, 1500);
    } catch (error) {
      Swal.fire({
        title: 'Error!',
        text: 'Invalid email or password. Please try again.',
        icon: 'error',
      });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await signInWithGoogle();
      navigate(location?.state ? location.state.from : '/');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-3xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSignIn}>
          <div className="mb-4">
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 focus:outline-none"
          >
            Login
          </button>
        </form>
        <div className="mt-4">
          <button
            onClick={handleGoogleSignIn}
            className="w-full flex items-center justify-center bg-red-500 text-white py-2 rounded hover:bg-red-600 focus:outline-none"
          >
            <span className="mr-2">
              <FcGoogle />
            </span>
            Login with Google
          </button>
        </div>
        <div className="mt-4 text-center">
          <p>
            Do not have an account?{' '}
            <Link to="/signup" className="text-blue-500">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
