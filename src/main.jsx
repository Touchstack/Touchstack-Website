import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/HomePage/HomePage.jsx";
import SalesInventoryPage from "./pages/SalesInventoryPage/SalesInventoryPage.jsx";
import HumanResourcePage from "./pages/HumanResourcePage/HumanResourcePage.jsx";
import ErrorPage from "./pages/ErrorPage/ErrorPage.jsx";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage.jsx";
import Careers from "./pages/CareersPage/CareersPage.jsx";
import FindUsPage from "./pages/FindUsPage/FindUsPage.jsx";
import SolutionsPage from "./pages/SolutionsPage/SolutionsPage.jsx";
import BlogPage from "./pages/BlogPage/BlogPage.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import ArticlePage from "./pages/BlogPage/ArticlePage.jsx";
import AiArticle from "./pages/BlogPage/AiArticle.jsx";
import CloudArticle from "./pages/BlogPage/CloudArticle.jsx";
import Cybersecurity from "./pages/BlogPage/Cybersecurity.jsx";
import StartAProject from "./pages/StartAProject/StartAProject.jsx";
import GreenTech from "./pages/BlogPage/GreenTech.jsx";
import VrArticle from './pages/BlogPage/VrArticle.jsx';
import ComingSoonPage from "./pages/ComingSoonPage/ComingSoonPage.jsx";

const router = createBrowserRouter([
  { path: "/", element: <ComingSoonPage />, errorElement: <ErrorPage /> }
  //{ path: "/", element: <HomePage />, errorElement: <ErrorPage /> },
  // {
  //   path: "/products/sims",
  //   element: <SalesInventoryPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/products/hrm",
  //   element: <HumanResourcePage />,
  //   errorElement: <ErrorPage />,
  // },

  // { path: "/aboutus", element: <AboutUsPage />, errorElement: <ErrorPage /> },
  // { path: "/careers", element: <Careers />, errorElement: <ErrorPage /> },
  // { path: "/contactus", element: <FindUsPage />, errorElement: <ErrorPage /> },
  // // { path: "/teampage", element: <TeamPage  />, errorElement: <ErrorPage /> },

  // {
  //   path: "/solutions",
  //   element: <SolutionsPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/blog",
  //   element: <BlogPage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/article/brian-leadership-award",
  //   element: <ArticlePage />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/article/cloud-computing",
  //   element: <CloudArticle />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/article/artificial-intelligence",
  //   element: <AiArticle />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/startaproject",
  //   element: <StartAProject />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/article/virtual-reality",
  //   element: <VrArticle />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/article/cybersecurity-blog",
  //   element: <Cybersecurity />,
  //   errorElement: <ErrorPage />,
  // },
  // {
  //   path: "/article/everything-you-need-to-know-about-green-technology-in-2023",
  //   element: <GreenTech />,
  //   errorElement: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
