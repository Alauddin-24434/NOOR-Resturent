import { NavLink } from "react-router-dom";

const Navbar = () => {

    const navItem=<>
   <li> <NavLink to={'/'}>Home</NavLink></li>
   <li> <NavLink to={'/allFood'}>All Product</NavLink></li>
   <li> <NavLink to={'/blog'}>Blog</NavLink></li>
    
    </>
    return (
        <div>

            <nav className="flex flex-row shadow-md justify-between p-4">
                <div><h2>LOGO</h2></div>
                <div>
                    <ul className="flex flex-row gap-4">
                      
                            {
                                navItem
                            }
                      
                      
                    </ul>
                    </div>
                <div>
                    <ul>
                        <li>
                            <button>ICON</button>
                        </li>
                    </ul>
                </div>
            </nav>

        </div >
    );
};

export default Navbar;