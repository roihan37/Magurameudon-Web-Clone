import {
    createBrowserRouter, redirect
} from "react-router-dom";
import { BaseLayout } from "../components/BaseLayout";
import { CategoryPage } from "../views/CategoryPage";
import { DashboardPage } from '../views/DashboardPage'
import { LoginPage } from "../views/LoginPage";
import { RegisterPage } from "../views/RegisterPage";
import { EditProductPage } from "../views/EditProductPage";
import { CategoryForm } from "../components/CategoryForm";
import { AddProductPage } from "../views/AddProductPage";
// const navigate = useNavigate();
const router = createBrowserRouter([

    {
        element: <BaseLayout />,
        children: [
            {
                path: "/",
                element: <DashboardPage />,
            },
            {
                path: "/categories",
                element: <CategoryPage />,
            },
            {
                path: "/register",
                element: <RegisterPage />,
            },
            {
                path: "/add-product",
                element: <AddProductPage />,
            },
            {
                path: "/edit-product/:id",
                element: <EditProductPage />,
            },
            {
                path: "/add-category",
                element: <CategoryForm />,
            },
        ],
        loader: () => {
            if (!localStorage.getItem('access_token')) {
                throw redirect('/login')
            } else {
                return null
            }
        }
    },
    {
        path: "/login",
        element: <LoginPage />,
        loader: () => {
            if (localStorage.getItem('access_token')) {
                throw redirect('/')
            } else {
                return null
            }
        }
    },



]);

export default router