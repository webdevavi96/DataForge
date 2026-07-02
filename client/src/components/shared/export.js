import { lazy } from "react";

const AuthButton = lazy(() => import("./buttons/AuthButtons"));
const ScrollButton = lazy(() => import("./buttons/ScrollButton"));
const Button = lazy(() => import("./buttons/Button"));
const Card = lazy(() => import("./cards/Card"));
const Footer = lazy(() => import("../navigation/Footer"));

export { AuthButton, ScrollButton, Button, Card, Footer };
