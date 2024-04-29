import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root.jsx";
import Home from "../shared/Home/Home.jsx";
import Register from "../Components/Register.jsx";
import Error from "../ErrorPage/Error.jsx"
import Login from "../Components/Login.jsx";
import AddTouristSpot from "../Components/AddTouristSpot.jsx";
import TouristSpot from "../Pages/TouristSpot/TouristSpot.jsx";
import Users from "../Components/Users.jsx";
import PrivateRoute from "./shared/PrivateRoute.jsx";
import MyList from "../Components/MyList.jsx";
// import Details from "../Components/Details.jsx";
import UpdateSpot from "../Components/UpdateSpot.jsx";

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
                path: '/user',
                element: <Users></Users>,
                loader: () => fetch('http://localhost:5000/user')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/mylist',
                element: <PrivateRoute>
                    <MyList />
                </PrivateRoute>
            },
            // {
            //     path: '/details/:id',
            //     element: <PrivateRoute>
            //         <Details></Details>
            //     </PrivateRoute>
            // },
            {
                path: '/mylist/update/:id',
                element: <PrivateRoute>
                    <UpdateSpot />
                </PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/allspot/${params.id}`)
            },
            {
                path: '/addspot',
                element: <AddTouristSpot></AddTouristSpot>
            },
            {
                path: '/allspot',
                element: <TouristSpot></TouristSpot>,

            }

        ]
    },
]);

export default router;