
import { createBrowserRouter } from "react-router";
import Root from "../Pages/Root/Root";
import Home from "../Pages/Home/Home";
import Appdetails from "../Pages/App/Appdetails";
import Instolation from "../Pages/instolation/Instolation";
import Page_error from "../Pages/Error/Page_error";
import Moredetailsapp from "../Pages/Moredeatailsapp/Moredetailsapp";
 export const router = createBrowserRouter([
  {
    path: "/",
    Component:Root,
    errorElement:<Page_error></Page_error>,
    children:[
         { index: true, 
        loader:()=>fetch('/Trendingapp.json'),
         Component: Home 
        },
         {
            path:'/app',
            Component:Appdetails
         },
         {
            path:'/details/:appid',
            loader:()=>fetch('/Trendingapp.json'),
            Component:Moredetailsapp
         },
         {
            path:'/install',
            Component: Instolation
         }
    ]
  },
]);