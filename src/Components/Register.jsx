import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { useForm } from "react-hook-form";
import { register } from "swiper/element";

const Register = () => {
    const { createUser } = useContext(AuthContext)
    // const { register, handleSubmit, formState: { errors }, } = useForm()

    // const onSubmit = (data) => {
    //     const {email, password} = data;
    //     createUser(email, password)
    //     .then(result =>{
    //         console.log(result)
    //     })
    // }

    const handleRegister = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;

        console.log(name, photo, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                const user = { email };
                fetch('http://localhost:5000/user',{
                    method: 'POST',
                    headers:{
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(user)
                })
                .then(res => res.json())
                .then(data =>{
                    console.log(data)
                })
                
            })
            .catch(error => {
                console.error(error)
            })
    }
    return (
        <div className="md:pl-[24rem] font-dancing">
            <div className="w-full max-w-md border-2 p-4 rounded-md shadow sm:p-8 dark:bg-gray-50 dark:text-gray-800">
                <h2 className="mb-3 text-3xl font-semibold text-center"> Please Register Your Account </h2>

                <form onSubmit={handleRegister} noValidate="" action="" className="space-y-8">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="text" className="text-sm">Name</label>
                            <input type="text" name="name" placeholder="Your Name" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {/* {errors.name && <span>This field is required</span>} */}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm">Email</label>
                            <input type="email" name="email" placeholder="Your Email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {/* {error.email && <span>This field is required</span>} */}
                            {/* {...register("email", { required: true })} */}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="photo" className="text-sm">PhotoURL</label>
                            <input type="text" name="photo" placeholder="Your Photo URL" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {/* {errors.photo && <span>This field is required</span>} */}
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="photo" className="text-sm">Password</label>
                            <input type="password" name="password" placeholder="Your Password" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
                            {/* {errors.password && <span>This field is required</span>} */}
                        </div>
                        <button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-violet-600 dark:text-gray-50 btn btn-primary">Register</button>
                    </div>
                </form>
                <p className="text-sm text-center dark:text-gray-600">Do you have an account?
                    <Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline text-blue-400 font-semibold"> Login here</Link>
                </p>
            </div>
        </div>
    );
};

export default Register;