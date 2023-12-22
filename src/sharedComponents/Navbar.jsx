import { useContext } from "react";
import { BiMenu } from "react-icons/bi";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { FaCircleUser } from "react-icons/fa6";


const Navbar = () => {

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate()

    // logout functionality
    const handleLogout = () => {
        logout()
            .then(() => {
                navigate("/")
                return alert('Logout Successful!');
            })
            .catch((error) => {
                return alert(error.message);
            });
    };


    return (
        <div >
            <div className="navbar">
                <div className="navbar-start">
                    {/* Dropdown menu for small screens */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <div className="text-2xl">
                                <BiMenu />
                            </div>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-100 rounded-box w-48">

                            <li><Link to="/">Home</Link></li>

                            <li><Link to="/aboutUs">About Us</Link></li>

                            <li><Link to="/contactUs">Contact Us</Link></li>


                            <li><Link to="/dashboard" >Dashboard</Link></li>

                        </ul>
                    </div>
                    {/* Logo */}
                    <div className="flex items-center gap-3" >
                        <img className="w-10 h-10 border-2 ring-2 rounded-full ring-[#fc5025]" src="https://i.ibb.co/Xkc3j5h/logo.png" alt="Logo" />
                        <h2 className="text-xl font-bold text-[#505050]" >Fintask</h2>
                    </div>
                </div>


                <div className="navbar-center hidden lg:flex">
                    {/* Navigation links */}
                    <ul className="flex gap-5 text-[14px] md:text-base text-[#5c5776] font-normal">

                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fc5026] underline" : ""
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/aboutUs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fc5026] underline" : ""
                                }
                            >
                                About Us
                            </NavLink>
                        </li>


                        <li>
                            <NavLink
                                to="/contactUs"
                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fc5026] underline" : ""
                                }
                            >
                                Contact Us
                            </NavLink>
                        </li>


                        {user && <li>
                            <NavLink to="/dashboard"

                                className={({ isActive, isPending }) =>
                                    isPending ? "pending" : isActive ? "text-[#fc5026] underline" : ""
                                }
                            >
                                Dashboard
                            </NavLink>
                        </li>}


                    </ul>
                </div>

                <div className="navbar-end">
                    {/* Conditional rendering of user profile or login button */}
                    {user ? (
                        <div className="space-y-2">
                            <div className="flex gap-3 items-center ">
                                {user.photoURL ? (
                                    <img
                                        className="w-9 h-9 rounded-full border-2 border-gray-300"
                                        src={user.photoURL}

                                    />
                                ) : (
                                    <FaCircleUser className="text-3xl" />
                                )}
                                <p>{user.displayName || "User"}</p>
                            </div>
                            <button onClick={handleLogout}

                                className="bg-[#975cec] px-4  py-1 rounded-full text-white font-semibold text-lg"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex gap-3 items-center">
                            <FaCircleUser className="text-3xl" />
                            <Link to="/signin">
                                <button className="bg-[#975cec]  px-4 py-1 rounded-full text-lg font-semibold text-white tracking-wide">
                                    Login
                                </button>
                            </Link>
                        </div>
                    )}
                </div>

            </div>

        </div>
    );
};

export default Navbar;