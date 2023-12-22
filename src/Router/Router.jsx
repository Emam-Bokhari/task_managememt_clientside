import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";
import ContactUs from "../pages/ContactUs/ContactUs";
import AboutUs from "../pages/AboutUs/AboutUs";
import AllTask from "../Layout/Dashboard/AllTask/AllTask";
import CreateTask from "../Layout/Dashboard/CreateTask/CreateTask";
import ManageTask from './../Layout/Dashboard/ManageTask/ManageTask';
import Signin from "../pages/Signin/Signin";
import Register from './../pages/Register/Register';
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import EditTask from "../Layout/Dashboard/AllTask/EditTask/EditTask";





const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/aboutUs",
                element: <AboutUs />
            },
            {
                path: "/contactUs",
                element: <ContactUs />
            },
            {
                path: "/signin",
                element: <Signin />
            },
            {
                path:"/register",
                element:<Register/>
            }
            

        ]
    },

    {
        path: "/dashboard",
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            {
                path: "/dashboard/allTask",
                element: <AllTask />
            },
            {
                path: "/dashboard/createTask",
                element: <CreateTask />
            },
            {
                path:"/dashboard/editTask/:id",
                loader:({params})=>fetch(`https://task-management-serverside-taupe.vercel.app/api/v1/${params.id}/show-task`),
                element:<EditTask/>
            },
            {
                path: "/dashboard/manageTask",
                element: <ManageTask />
            }
        ]
    }


])
export default Router