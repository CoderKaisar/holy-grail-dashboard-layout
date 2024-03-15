import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Dashboard from "../layout/Dashboard";
import MainContent from "../DashboardComponent/MainContent/MainContent";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main/>,
        children: [
            {
                path:"/",
                element:<Home/>                
            }
        ]
    },
    {
        path:"/dashboard",
        element:<Dashboard/>,
        children:[
            {
                path:"/dashboard",
                element:<MainContent/>
            }
        ]
    }
])

export default router;