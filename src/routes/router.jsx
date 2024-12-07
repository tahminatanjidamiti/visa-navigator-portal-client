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


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/all_visas",
                element: <AllVisas></AllVisas>,
            },
            {
                path: "/add_visa",
                element: <AddVisa></AddVisa>,
            },
            {
                path: "/my_added_visas",
                element: <MyAddedVisas></MyAddedVisas>,
            },
            {
                path: "/my_visa_application",
                element: <VisaApplication></VisaApplication>,
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