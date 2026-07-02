import { createBrowserRouter } from "react-router-dom";

import {
    LandingPage,
    DashBoard,
    AboutPage,
    HomePage,
    SignInPage,
    SignUpPage,
    UploadPage,
} from "../../pages/pageExport.js";

import Layout from "../layout/Layout.jsx";

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
        ],
    },
]);

export default router;