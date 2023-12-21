import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../pages/Home/Home";
import Dashboard from "../Layout/Dashboard/Dashboard";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children:[
            {
                path:"/",
                element:<Home/>
            }
        ]
    },
    
    {
        path:"/dashboard",
        element:<Dashboard/>,
    }
        
    
])
export default Router