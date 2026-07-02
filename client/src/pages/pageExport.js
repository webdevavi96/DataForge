import React, { lazy } from "react";

const LandingPage = lazy(() => import("./LandingPage"));
const DashBoard = lazy(() => import("./DashBoard"));
const AboutPage = lazy(() => import("./AboutPage"));
const HomePage = lazy(() => import("./HomePage"));
const SignUpPage = lazy(() => import("./SignUpPage"));
const SignInPage = lazy(() => import("./SignInPage"));
const UploadPage = lazy(() => import("./UploadPage"));

export {
  LandingPage,
  DashBoard,
  AboutPage,
  HomePage,
  SignInPage,
  SignUpPage,
  UploadPage,
};
