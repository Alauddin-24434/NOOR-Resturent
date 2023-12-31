import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import {   BiLogOut } from "react-icons/bi";

const Navbar = () => {
    const { authUser, userLogOut } = useContext(AuthContext)
    const navigate = useNavigate()
    const handleLogout = () => {
        userLogOut()
            .then(() => {
                return navigate('/login')

            })
            .catch()
    }

    const navItem = <>
        <li> <NavLink to={'/'}>Home</NavLink></li>
        <li> <NavLink to={'/allFood'}>All Product</NavLink></li>
        <li> <NavLink to={'/blog'}>Blog</NavLink></li>
      
        {
            !authUser && <li> <NavLink to={'/login'}>Login</NavLink></li>
        }


    </>
    return (
      
        <div className="navbar bg-orange-400 shadow-md text-white">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost  lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu bg-orange-400 text-2xl menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">


                        {
                            navItem
                        }

                    </ul>
                </div>
                <p className="text-sm md:text-2xl font-bold">N <span className="text-indigo-500">O</span> O <span className="text-indigo-500">R</span></p>
            </div>
            <div className="navbar-center hidden  lg:flex ">
                <ul className="menu flex gap-4 items-center menu-horizontal px-1">
                    {
                        navItem
                    }
                </ul>
            </div>
            <div className="navbar-end">

                {
                    authUser &&
               <>
               
               <div className="rounded-md flex items-center gap-4 justify-center ">
                 
               <button className="p-1 font-medium" onClick={handleLogout}><span className="flex items-center gap-1 font-bold justify-center">Logout<BiLogOut></BiLogOut> </span></button>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={authUser?.photoURL} />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-orange-400 rounded-box w-52">
                        <li> <NavLink to={'/addedItems'}>My added food items</NavLink></li>
                        <li> <NavLink to={'/addItem'}>Add a food item</NavLink></li>
                        <li> <NavLink to={'/orderItems'}>My ordered food items</NavLink></li>
                        </ul>
                    </div>
               </div>
               
               </>
                }
            </div>

        </div>

    );
};

export default Navbar;