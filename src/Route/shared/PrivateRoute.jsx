import useAuth from "../../Provider/useAuth";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user } = useAuth() || {};
    let navigate = useNavigate()
    if (user || !user?.email) {
        navigate('/login')
        return false
    }
    return <>
        {children}
    </>

};

export default PrivateRoute;