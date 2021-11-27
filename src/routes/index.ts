import { RouteConfig } from "react-router-config"

import App from "../app"
import AsyncHome, { loadData as loadHomeData } from "../pages/Home"
import AsyncMembrePage, { loadData as loadMembrePageData } from "../pages/MembrePage"
import Login from "../pages/Login"
import Register from "../pages/Register"
import NotFound from "../pages/NotFound"

export default [
    {
        component: App,
        routes: [
            {
                path: "/",
                exact: true,
                component: AsyncHome, // Add your page here
                loadData: loadHomeData, // Add your pre-fetch method here
            },
            {
                path: "/MembrePage/:id",
                component: AsyncMembrePage,
                loadData: loadMembrePageData,
            },
            {
                path: "/login",
                component: Login,
            },
            {
                path: "/register",
                component: Register,
            },
            {
                component: NotFound,
            },
        ],
    },
] as RouteConfig[]
