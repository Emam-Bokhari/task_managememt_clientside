import { Link, useLocation, useNavigate } from "react-router-dom";

// import {FcGoogle} from "react-icons/fc"
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../sharedComponents/Navbar";



const Signin = () => {

    const { signin } = useContext(AuthContext)
    const navigate = useNavigate()
    const location=useLocation()
    const handleSignin = (event) => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value
        const password = form.password.value
        // console.log(email, password);

        // siginin with email and password
        signin(email, password)
        .then(() => {
            navigate(location?.state?location.state:"/")
            return alert('Login Successfull!')

        })
        .catch((error) => {
            return alert(error.message)
        })
    }

 

    return (
        <div>



            {/* Navbar */}
            <div >
                <Navbar />
            </div>



            <div className="flex justify-center mt-20 my-10 " >
                <div className="bg-[#f4f1ff] w-[280px] h-[370px] rounded-lg p-4">
                    <form onSubmit={handleSignin} className="space-y-2 my-5" >
                        <h2 className="text-lg font-bold text-[#2a2a2a]" >
                            Sign In
                        </h2>
                        <p className="text-lg font-semibold text-[#272727]" >Please enter your details.</p>

                        {/* email */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Email Address</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="email" name="email" />
                        </div>

                        {/* password */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Password</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="password" name="password" />
                        </div>

                        {/* checkbox and forgotten password */}
                        <div className="flex justify-between items-center" >
                            {/* checkbox */}
                            <div>
                                <input type="checkbox" />
                                <label className="ml-2 text-[14px] text-[#2a2a2a]" htmlFor="checkbox">Remember me</label>
                            </div>

                            {/* forgotten */}
                            <div>
                                <p className="text-[12px] text-[#2a2a2a]">Forgotten Password?</p>
                            </div>
                        </div>

                        {/* button */}
                        <div>
                            <input className="bg-[#975cec] text-white font-semibold py-1 border-2 border-[#975cec] w-full rounded-md " type="submit" value="Signin" />
                        </div>

                        {/* social signin */}

                       

                        {/* signup */}
                        <div className="text-center" >
                            <p className="text-[14px] text-[2a2a2a] font-semibold">Dont have an account? <Link className="underline" to="/register" >Register</Link></p>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Signin;