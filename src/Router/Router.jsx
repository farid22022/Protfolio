import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home2 from "../Pages/Home/Home";
import TechStack from "../Pages/DevelopmentStack/TechStack";
import Projects from "../Pages/Projects/Projects";
import Contact from "../Pages/Contact/Contact";
import AboutMe from "../Pages/AboutMe/AboutMe";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children:[
        {
            path:'/home',
            element:<Home2></Home2>
        },
        {
            path:'/development-stack',
            element:<TechStack></TechStack>
        },
        {
            path:'/projects',
            element:<Projects></Projects>
        },
        {
            path:'/contact-me',
            element:<Contact></Contact>
        },
        {
            path:'/about-me',
            element:<AboutMe></AboutMe>
        }
      ]
    },
  ]);

export default router;