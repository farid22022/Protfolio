import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home";
import TechStack from "../Pages/DevelopmentStack/TechStack";
import Projects from "../Pages/Projects/Projects";


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
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        }
      ]
    },
  ]);

export default router;