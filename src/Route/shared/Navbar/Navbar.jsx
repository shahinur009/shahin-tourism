import { Link, NavLink } from "react-router-dom";

const Navbar = () => {

    return (
        <div className="navbar bg-base-100">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="https://i.ibb.co/10dT9vw/logo.png" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box z-[9999] w-52">
                        <li><NavLink to='/'>Home</NavLink></li>
                        <li><NavLink to='/allspot'>All Tourists Spot</NavLink></li>
                        <li><NavLink to='/addspot'>Add Tourists Spot</NavLink></li>
                        <li><NavLink to='/mylist'>My List</NavLink></li>
                        <li><NavLink to='/login'>Login</NavLink></li>
                        <li><NavLink to='/register'>Register</NavLink></li>
                        <li><NavLink to='/address'>Address</NavLink></li>
                        <li><NavLink to='/passion'>Passion</NavLink></li>

                    </ul>
                </div>
                <Link to='/' className="btn btn-ghost text-xl md:h-24 md:w-40 h-20 w-32">
                    <img src="https://i.ibb.co/vxQkM4t/logo-1.png" alt="" />
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><NavLink to='/'>Home</NavLink></li>
                    <li><NavLink to='/allspot'>All Tourists Spot</NavLink></li>
                    <li><NavLink to='/addspot'>Add Tourists Spot</NavLink></li>
                    <li><NavLink to='/mylist'>My List</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/address'>Address</NavLink></li>
                    <li><NavLink to='/passion'>Passion</NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a className="btn">Login</a>
            </div>
        </div>
    );
};

export default Navbar;