import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

import { Link, useLocation, useNavigate, } from "react-router-dom";
import { FcGoogle } from 'react-icons/fc';

import Swal from "sweetalert2";



const Login = () => {
    const navigate = useNavigate()
    const location = useLocation();
    // console.log(location)

    const { userLogin, signInWithGoogle } = useContext(AuthContext)
    const handleSignIn = (event) => {
        event.preventDefault();


        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        console.log(email, password)
        userLogin(email, password)
            .then(() => {

                Swal.fire({
                    title: 'Success!',
                    text: "User login successfully!",
                    icon: 'success',


                })
                setTimeout(() => {
                    navigate(location?.state ? location.state : '/'), 10
                }, "1500");


            })


            .catch(() => {
                // console.log(error.message)
                Swal.fire({
                    title: 'error!',
                    text: "Password doesn't match!",
                    icon: 'error',

                })


            })


    }




    // google sign in
    const handleGoogleSignIn = () => {

        signInWithGoogle()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location?.state : '/')
            })
            .catch(error => {
                console.error(error)
            })

    }





    return (
        <div className="min-h-screen justify-center flex py-8" >
            <div className="w-full lg:w-1/3 py-16 px-12">
                <h2 className="text-3xl mb-4">Login</h2>



                <form onSubmit={handleSignIn} >


                    <div className="mt-5">
                        <input type="text" name="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>

                    <div className="mt-5">
                        <input type="password" name="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>

                    <div className="mt-5">
                        <button className="w-full bg-purple-500 py-3 text-center text-white">Login Now</button>
                    </div>

                </form>
                <div className="mt-5  mb-4">
                    <button onClick={handleGoogleSignIn} className="w-full flex flex-row items-center justify-center gap-4 text-blue-700 border py-3 text-center font-medium"> <span><FcGoogle></FcGoogle></span> Login with Google</button>
                </div>
                <div className="mt-5  mb-4">
                    <div className="flex justify-center gap-2"> <p>If do not have account?</p><Link className="text-purple-800" to={'/signUp'}>SignUp</Link>  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;