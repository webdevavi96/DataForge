import { lazy } from "react";

const AuthButton = lazy(() => import("./shared/buttons/AuthButtons"));
const ScrollButton = lazy(() => import("./shared/buttons/ScrollButton"));
const Button = lazy(() => import("./shared/buttons/Button"));
const Card = lazy(() => import("./shared/cards/Card"));
const Footer = lazy(() => import("./navigation/Footer"));
const ProfileCard = lazy(() => import("./shared/cards/ProfileCard"));
const ProtectedRoutes = lazy(() => import("./navigation/ProtectedRoutes"));

export {
  AuthButton,
  ScrollButton,
  Button,
  Card,
  Footer,
  ProfileCard,
  ProtectedRoutes,
};
