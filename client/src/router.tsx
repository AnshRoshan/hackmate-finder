import { createBrowserRouter, Outlet } from "react-router-dom";
import AuthPage from "./pages/auth";
import HomePage from "./pages/home";

const router = createBrowserRouter([
    {
        path:'/',
        element:<Outlet/>,
        children:[
            {
                path:'home',
                element:<HomePage/>
            },
            {
                path:'auth',
                element:<AuthPage/>,
            }        
        ]
    },
])

export default router