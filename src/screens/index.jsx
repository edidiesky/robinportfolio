import { lazy } from "react";
import Layout from "./Layout";
const Single = lazy(() => import("./Single"));
const Home = lazy(() => import("./Home"));
const Contact = lazy(() => import("./Contact"));

export { Layout, Single, Home, Contact };
