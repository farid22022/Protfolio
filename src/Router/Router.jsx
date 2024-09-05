import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import TechStack from "../Pages/DevelopmentStack/TechStack";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/',
            element:<Home></Home>
        },
        {
            path:'/techStack',
            element:<TechStack></TechStack>
        }
      ]
    },
  ]);

export default router;