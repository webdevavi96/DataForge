import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout"

import { ProtectedRoutes } from "../export.js";
import {
    LandingPage,
    DashBoard,
    AboutPage,
    HomePage,
    SignInPage,
    SignUpPage,
    UploadPage,
    ProfilePage,
} from "../../pages/pageExport.js";


const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            {
                index: true,
                Component: LandingPage,
            },
            {
                path: "dashboard",
                Component: DashBoard,
            },
            {
                path: "about",
                Component: AboutPage,
            },
            {
                path: "home",
                Component: HomePage,
            },
            {
                path: "signin",
                Component: SignInPage,
            },
            {
                path: "signup",
                Component: SignUpPage,
            },
            {
                path: "upload",
                Component: UploadPage,
            },
            {
                path: "profile",
                element: (
                    <ProtectedRoutes>
                        <ProfilePage />
                    </ProtectedRoutes>
                ),
            }
        ],
    },
]);

export default router;