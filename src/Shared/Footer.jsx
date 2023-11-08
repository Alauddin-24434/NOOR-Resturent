import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <div className="bg-gray-400 h-56">


                <footer >
                    <ul className="flex flex-row items-center gap-8 justify-center">
                        <li>
                            <Link>Home</Link>
                        </li>
                        <li>

                      
                            <Link >About</Link>
                        </li>
                        <li>
                            <Link>Services</Link>
                        </li>
                        <li>
                            <Link>Contact</Link>
                        </li>
                    </ul>
                </footer>
            </div>

        </div>
    );
};

export default Footer;