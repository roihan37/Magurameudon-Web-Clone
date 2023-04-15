import { Outlet } from "react-router";
import { Navbar } from "./Navbar";
import Sidebar from "./Sidebar";
export function BaseLayout() {
    return <>
        <Navbar />
        <Outlet />
        <Sidebar />
    </>
}