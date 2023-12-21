import { Link, useLocation, useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc"
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Navbar from "../../sharedComponents/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {

    const { register, handleSubmit } = useForm()
    const { createUser,googleSignin  } = useContext(AuthContext)
    const navigate = useNavigate()
    const location=useLocation()

    const onSubmit = (data) => {
       

        // check password length
        if (data.password.length < 6) {
            return alert('Password must be at least 6 characters or too long')
        }
        // check capital letter
        else if (!/[A-Z]/.test(data.password)) {
            return alert('Please make sure your password has at least one capital letter')
        }
        // check special character
        else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\|'"\-=]/.test(data.password)) {
            return alert('Please make sure at least one special character')
        }


        // create user with email and password
        createUser(data.email, data.password)
            .then(() => {
                navigate(location?.state?location.state:"/")
                return alert('Your account has been created successfully!')
            })
            .catch((error) => {
                return alert(error.message);
            })
    }

        // googleSignin
        const handleGoogleSignin = () => {
            googleSignin()
                .then(() => {
                    navigate(location?.state?location.state:"/")
                    return alert('Login Successful by Google')
    
                })
                .catch()
        }


    return (
        <div>

           
            {/* Navbar */}
            <div  >
                <Navbar />
            </div>

            <div className="flex justify-center mt-20 my-10" >
                <div className="bg-[#f4f1ff] w-[310px] h-[530px] rounded-lg p-4">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-2 my-5" >
                        <h2 className="text-lg font-bold text-[#2a2a2a]" >
                            Register
                        </h2>
                        <p className="text-lg font-semibold text-[#272727]" >Please provide your details.</p>

                        {/* social signin */}

                        <div>
                            <button onClick={handleGoogleSignin} className="w-full border-2 border-[#e5e5e5] rounded-md py-1 bg-white flex justify-center items-center gap-2 text-[#494949] font-bold text-[14px] cursor-pointer"> <div className="text-2xl" ><FcGoogle /></div> Sign in with google</button>
                        </div>

                        {/* Horizontal Line "Or" */}
                        <div className="flex items-center relative z-10">
                            <div className="flex-grow border-t border-gray-300"></div>
                            <h2 className="text-base text-[#2a2a2a] relative z-10 mx-2">Or</h2>
                            <div className="flex-grow border-t border-gray-300"></div>
                        </div>


                        {/* name */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">User Name</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="text"  {...register("name", { required: true })} />
                        </div>

                        {/* email */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Email Address</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="email" {...register("email", { required: true })} name="email" required />
                        </div>

                        {/* password */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">Password</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="password" {...register("password", { required: true })} name="password" required />
                        </div>


                        {/* photoURL */}
                        <div>
                            <p className="text-base font-semibold text-[#8e8e8e]">PhotoURL</p>
                            <input className="px-2 border-2 border-[#ebebeb] w-full rounded-md outline-[#4b82f2]" type="text" {...register("photoURL", { required: true })} name="photoURL" />
                        </div>


                        {/* button */}
                        <div>
                            <input className="bg-[#975cec] text-white font-semibold py-1 border-2 border-[#975cec] w-full rounded-md " type="submit" value="Continue" />
                        </div>


                        {/* signup */}
                        <div className="text-center" >
                            <p className="text-[14px] text-[2a2a2a] font-semibold">Already have an account? <Link className="underline" to="/signin" >Signin</Link></p>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    );
};

export default Register;