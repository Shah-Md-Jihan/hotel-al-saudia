import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import About from "../Pages/About/About";
import Contact from "../Pages/Contact/Contact";
import Home from "../Pages/Home/Home";
import Interior from "../Pages/Interior/Interior";
import Offers from "../Pages/Offers/Offers";


export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/offers',
                element: <Offers></Offers>
            },
            {
                path: '/interior',
                element: <Interior></Interior>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            }
        ]
    }
]);