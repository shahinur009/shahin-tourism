import { Link } from "react-router-dom";

const Register = () => {
    return (
        <div className="md:pl-[24rem]">
            <div className="w-full max-w-md border-2 p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center"> Please Register Your Account </h2>

                <form noValidate="" action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="text" className="text-sm">Name</label>
                            <input type="text" name="name" id="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input type="email" name="email" id="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <label htmlFor="password" className="text-sm">Password</label>
                                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline dark:text-gray-600">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                        </div>
                    </div>
                    <p className="text-sm text-center dark:text-gray-600">Do you have an account?
                        <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-400 font-semibold"> Login here</Link>
                    </p>
                    <button type="button" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 btn btn-primary">Register</button>
                </form>
            </div>
        </div>
    );
};

export default Register;