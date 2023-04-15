import { createBrowserRouter, } from "react-router-dom";
import { OurMenuPage } from "../views/OurMenuPage";
import { AboutUsPage } from "../views/AboutUsPage";
import { FoodDetailPage } from "../views/FoodDetailPage";
import { HomePage } from "../views/HomePage";
import { Layout } from "../views/Layout";


const router = createBrowserRouter([
    {
        element: <Layout />,
        children : [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "/menu",
                element: <OurMenuPage />,
            },
            {
                path: "/about",
                element: <AboutUsPage />,
            },
            {
                path: "/menu/:id",
                element: <FoodDetailPage />,
            },
        ]
    },
    
  ]);

  export default router