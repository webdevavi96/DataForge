import { createBrowserRouter } from "react-router-dom";

import {
    LandingPage,
    DashBoard,
    AboutPage,
    HomePage,
    SignInPage,
    SignUpPage,
} from "../../pages/pageExport.js";

const router = createBrowserRouter([
    {
        path: "/",
     
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
        ],
    },
]);

export default router;