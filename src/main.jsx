import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SalesInventoryPage from "./pages/SalesInventoryPage/SalesInventoryPage.jsx";
import HumanResourcePage from "./pages/HumanResourcePage/HumanResourcePage.jsx";
import Solutions from "./pages/Solutions/Solutions.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import Careers from "./pages/CareersPage/CareersPage.jsx";
import FindUsPage from "./pages/FindUsPage/FindUsPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";

const router = createBrowserRouter([
  { path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  { path: "/", element: <SalesInventoryPage />, errorElement: <ErrorPage /> },
  { path: "/", element: <HumanResourcePage />, errorElement: <ErrorPage /> },
  { path: "/", element: <Solutions />, errorElement: <ErrorPage /> },
  { path: "/", element: <AboutUsPage />, errorElement: <ErrorPage /> },
  { path: "/", element: <Careers />, errorElement: <ErrorPage /> },
  { path: "/", element: <FindUsPage />, errorElement: <ErrorPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
