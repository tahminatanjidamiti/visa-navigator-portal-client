import { createBrowserRouter } from "react-router-dom";
import Root from "../Components/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import AllVisas from "../Components/AllVisas";
import AddVisa from "../Components/AddVisa";
import MyAddedVisas from "../Components/MyAddedVisas";
import VisaApplication from "../Components/VisaApplication";
import Login from "../Components/Login";
import Register from "../Components/Register";
import PrivateRoute from "./PrivateRoute";
import VisaDetails from "./VisaDetails";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://my-tenth-assignment-server-taupe.vercel.app/latestVisas'),
            },
            {
                path: "/all_visas",
                element: <AllVisas></AllVisas>,
                loader: () => fetch('https://my-tenth-assignment-server-taupe.vercel.app/all_visas')
            },
            {
                path: "/add_visa",
                element: <PrivateRoute><AddVisa></AddVisa></PrivateRoute>,
            },
            {
                path: "/my_added_visas/:email",
                element: <PrivateRoute><MyAddedVisas></MyAddedVisas></PrivateRoute>,
                loader: ({params}) => fetch(`https://my-tenth-assignment-server-taupe.vercel.app/all_visas/${params.email}`)
            },
            {
                path: "/my_visa_application/:email",
                element: <PrivateRoute><VisaApplication></VisaApplication></PrivateRoute>,
                loader: ({params}) => fetch(`https://my-tenth-assignment-server-taupe.vercel.app/visaApplication/${params.email}`)
            },
            {
                path: "/visa_details/:id",
                element: <PrivateRoute><VisaDetails></VisaDetails></PrivateRoute>,
                loader: ({params}) => fetch(`https://my-tenth-assignment-server-taupe.vercel.app/visa_details/${params.id}`)
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <Register></Register>,
            }
        ]
    }
]);

export default router;