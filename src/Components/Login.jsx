import { useContext, useState } from "react";
import { Link, useLocation, useNavigate, useNavigation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import SocialLogIn from "./SocialLogIn";

const Login = () => {
    const { logInUser } = useContext(AuthContext)
    const [password, setPassword] = useState('');
    let [showPassword, setShowPassword] = useState(false)
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogIn = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInUser(email, password).then((val) => {
            navigate(location?.state ? location.state : '/')
        }).catch((err) => {
            Swal.fire({
                title: 'Use UpperCase & LowerCase and minimum 6 digits',
                icon: "error",
            })
        })
    }
    const handleShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return (
        <div className="md:pl-[24rem] font-dancing">
            <div className="w-full max-w-md border-2 p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center">Login to your account</h2>

                <form onSubmit={handleLogIn} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm">Email address</label>
                            <input type="email" name="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                            </div>
                            <input type={showPassword ? 'text' : 'password'} name="password" placeholder="*****" className="relative w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            <label className="password cursor-pointer absolute -ml-7 pt-2">
                                {
                                    showPassword ?
                                        (
                                            <svg xmlns="http://www.w3.org/2000/svg"
                                                onClick={() => setShowPassword(false)}
                                                fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                                            </svg>



                                        ) :

                                        (<svg xmlns="http://www.w3.org/2000/svg"
                                            onClick={() => setShowPassword(true)}

                                            fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>
                                        )
                                }

                            </label>
                        </div>

                    </div>

                    <div className="flex items-center w-full my-4">
                        <hr className="w-full dark:text-gray-600" />
                        <p className="px-3 dark:text-gray-600">OR</p>
                        <hr className="w-full dark:text-gray-600" />
                    </div>
                    <SocialLogIn></SocialLogIn>
                    <p className="text-sm text-center dark:text-gray-600">Do not have account?
                        <Link to='/register' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-400 font-semibold"> Register here</Link>
                    </p>
                    <button onClick={() => { handleLogIn }} type="submit" className="w-full btn btn-secondary px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50">Sign in</button>
                </form>
            </div>
        </div>
    );
};

export default Login;