import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

import { Link, useNavigate } from "react-router-dom";



const SignUp = () => {
    const { createUser } = useContext(AuthContext);

    const [signUpError, setSignUpError] = useState('')

    const navigate = useNavigate()



    const handleRegister = e => {

        e.preventDefault()
        const name = e.target.name.value;
        const image = e.target.image.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        // console.log(name, image, email, password)

        // input field and message clear
        setSignUpError('')

        function isPasswordValid(passwords) {
            // Define regular expressions to check for uppercase and lowercase letters
            const uppercaseRegex = /[A-Z]/;
            const lowercaseRegex = /[a-z]/;
            const specialCharacterRegex = /[^A-Za-z0-9\s]/g;

            // Check if the password contains at least one uppercase and one lowercase letter
            const hasUppercase = uppercaseRegex.test(passwords);
            const hasLowercase = lowercaseRegex.test(passwords);
            const hasSpecialCharacter = specialCharacterRegex.test(passwords);
            // Check if the password meets the minimum length requirement
            const isLengthValid = password.length > 5;

            // Return true if all conditions are met, indicating a valid password
            return hasUppercase && hasLowercase && hasSpecialCharacter && isLengthValid;


        }
        const passwords = password;
        const isValid = isPasswordValid(passwords);
        if (isValid) {

            // user create 
            createUser(email, password)
                .then(result => {


                    // update profile
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: image,
                    })
                        .then(() => console.log('profile updated'))
                    Swal.fire({
                        title: 'Success!',
                        text: "User created successfully!",
                        icon: 'success',

                        confirmButtonColor: '#3085d6',
                        cancelButtonColor: '#d33',

                    })

                    setTimeout(() => {
                        navigate(location?.state ? location.state : '/'), 10
                    }, "1500");
                })



                .catch(error => {
                    const errorMy = (error.message)
                    setSignUpError(errorMy)


                    {
                        signUpError && Swal.fire({
                            title: 'error!',
                            text: signUpError,
                            icon: 'error',
                        })
                    }

                })
        } else {

            Swal.fire({
                title: 'error!',
                text: "You set invalid password use must at least 6 characters long both uppercase lower case and any speacial charectar !",
                icon: 'error',


            })

        }

    }

    return (

        <div className="min-h-screen justify-center flex py-8" >
            <div className="w-full lg:w-1/3 py-16 px-12">
                <h2 className="text-3xl mb-4">Register</h2>
                <p className="mb-4">
                    Create your account. It’s free and only take a minute
                </p>
               <div className="border border-spacing-2 p-2">
               <form onSubmit={handleRegister} >
                    <div className="gap-5">
                        <input type="text" name="name" placeholder="Name" className="border border-gray-400 py-1 px-2 w-full" />

                    </div>
                    <div className="mt-5">
                        <input type="url" name="image" placeholder="image url" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>
                    <div className="mt-5">
                        <input type="text" name="email" placeholder="Email" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>

                    <div className="mt-5">
                        <input type="password" name="password" placeholder="Password" className="border border-gray-400 py-1 px-2 w-full" />
                    </div>
                    {/* <div className="mt-5">
                        <input type="password" placeholder="Confirm Password" className="border border-gray-400 py-1 px-2 w-full" />
                    </div> */}

                    <div className="mt-5">
                        <button className="w-full bg-purple-500 py-3 text-center text-white">Register Now</button>
                    </div>
                </form>
                <div className="mt-5  mb-4">
                    <div className="flex justify-center gap-2"> <p>If already have have account?</p><Link className="text-purple-800" to={'/login'}>Login</Link>  </div>
                </div>
               </div>


            </div>

        </div >

    );
};

export default SignUp;