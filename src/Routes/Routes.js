import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/Blog/Blog";
import CourseDetails from "../components/CourseDetails/CourseDetails";
import ProsedCourse from "../components/CourseDetails/ProsedCourse";
import Courses from "../components/Courses/Courses";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Faq from "../components/Faq/Faq";
import Home from "../components/Home/Home";
import Login from "../components/UserLogin/Login";
import Register from "../components/UserLogin/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement:<ErrorPage></ErrorPage>,
        loader:async ()=>fetch('https://check-server.vercel.app/courses/'),
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/home',
                element:<Home></Home>
            },
            {
                path:'/courses',
                element:<Courses></Courses>
            },
            {
                path:'/faq',
                element:<Faq></Faq>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
            {
                path:'/course&details/:id',
                element:<CourseDetails></CourseDetails>,
                loader:async({params})=>fetch(`https://check-server.vercel.app/courses/${params.id}`)
            },
            {
                path:'/course&prosed/:id',
                element:<PrivateRoute><ProsedCourse></ProsedCourse></PrivateRoute>,
                loader:async({params})=>fetch(`https://check-server.vercel.app/courses/${params.id}`)
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'register',
                element:<Register></Register>
            }
        ]
    }
])