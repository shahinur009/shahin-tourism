import useAuth from "../../Provider/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth() || {};
    const location = useLocation()

    if(loading){
        return <span className="loading loading-dots loading-lg items-center"></span>
    }
    if (user){
        return children;
    }
    else{
    return <Navigate state={location.pathname} to='/login'></Navigate>
    }

};

export default PrivateRoute;