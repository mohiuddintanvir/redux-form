import { createBrowserRouter } from "react-router-dom";
import Main from "../compnent/Main/Main";
import Home from "../compnent/Home/Home";
import About from "../compnent/About/About";
import Toprated from "../compnent/TopRated/Toprated";
import Cart from "../compnent/Cart/Cart";

const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main> ,
      children:[
        {
            path:"/home",
            element:<Home></Home>
        },
        {
            path:"/about",
            element:<About></About>
        },
        {
            path:"/toprated",
            element:<Toprated></Toprated>
        },
        {
            path:"/cart",
            element:<Cart></Cart>
        }
      ]
    },
  ]);
  export default router;