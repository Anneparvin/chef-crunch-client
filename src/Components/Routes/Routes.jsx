import { Navigate, createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home/Home";
import Main from "../Layouts/Main";
import Blog from '../Home/Blog/Blog';
import Login from "../SighIn/Login/Login";
import Register from "../SighIn/Register/Register";
import Profile from "../SighIn/Profile/Profile";
import ChefRecipies from "../Home/ChefRecipies/ChefRecipies";
import ChefSection from "../Home/ChefSection/ChefSection";
import Error from "../error/Error";

const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/blog',
                element:<Blog></Blog>,
                loader: async() => fetch('https://chef-krunch-server.vercel.app/chefcards')
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/chefcards',
                element: <ChefRecipies></ChefRecipies>,
                loader: async() => fetch('https://chef-krunch-server.vercel.app/chefcards')
            },
            {
                path: '/chefsection/:recipies',
                element: <ChefSection></ChefSection>,
                loader: async({params}) => fetch(`https://chef-krunch-server.vercel.app/chefrecipies/${params.recipies}`)
            }
        ]
           
    },
    {
        path: '/*',
        element: <Error></Error>,  
}
   
]);

export default router;