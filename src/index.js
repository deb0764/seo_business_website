import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "./App";
import Floating from "./components/floating/Floating";
import About from "./components/aboutPage/About";
import Service from "./components/servicePage/Service";
import ContactUs from "./components/contactPage/ContactUs";
import Career from "./components/careerPage/Career";
import Error from "./components/errorPage/Error";
import WebDevelopment from "./components/serviceList/WebDevelopment";
import "./index.css";
import AndroidApp from "./components/serviceList/AndroidApp";
import DeployHosting from "./components/serviceList/DeployHosting";
import Maintenance from "./components/serviceList/Maintenance";
import DigitalMarketing from "./components/serviceList/DigitalMarketing";
import BusinessSolution from "./components/serviceList/BusinessSolution";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact-us",
    element: <ContactUs />,
  },
  {
    path: "best-web-service-company",
    element: <About />,
  },
  {
    path: "web-service",
    element: <Service />,
  },
  {
    path: "career-opportunity",
    element: <Career />,
  },
  {
    path: "web-service/web-development",
    element: <WebDevelopment />,
  },
  {
    path: "web-service/android-app-development",
    element: <AndroidApp />,
  },
  {
    path: "web-service/deployment-and-hosting",
    element: <DeployHosting />,
  },
  {
    path: "web-service/maintenance-sevice",
    element: <Maintenance />,
  },
  {
    path: "web-service/digital-marketing",
    element: <DigitalMarketing />,
  },
  {
    path: "web-service/business-solution",
    element: <BusinessSolution />,
  },
  {
    path: "*",
    element: <Error />,
  },
]);
createRoot(document.getElementById("root")).render(
  <>
    <RouterProvider router={router} />
    <Floating />
  </>
);
