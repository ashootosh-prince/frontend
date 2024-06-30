import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import { ForgotPassword } from "../pages/ForgotPassword";
import SignUP  from "../pages/Signup";
import AllProducts from '../pages/AllProducts'
import ProductDetails from '../pages/ProductDetails'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children:[
            {
                path:"",
                element: <Home/>
            },
            {
                path: "login",
                element: <Login/>
            },
            {
                path:"forgot-password",
                element:<ForgotPassword/>
            },
            {
                path:"signup",
                element:<SignUP/>
            },
            {
                path : "all-products",
                element : <AllProducts/>
            },
            {
                path : "product/:id",
                element : <ProductDetails/>
            },
        ]
    }
])

export default router