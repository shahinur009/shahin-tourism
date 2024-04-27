import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root.jsx";
import Home from "../shared/Home/Home.jsx";
import Register from "../Components/Register.jsx";
import Error from "../ErrorPage/Error.jsx"
import Login from "../Components/Login.jsx";
import AddTouristSpot from "../Components/AddTouristSpot.jsx";
import TouristSpot from "../Pages/TouristSpot/TouristSpot.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <Error></Error>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/addspot',
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: '/allspot',
                element: <TouristSpot></TouristSpot>
            }

        ]
    },
]);

export default router;