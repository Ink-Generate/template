import React from "react";
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "../layout/layout";
const Home = lazy(() => import("@/pages/home/home"));
const About = lazy(() => import("@/pages/about/about"));
const Portfolio = lazy(() => import("@/pages/portfolio/portfolio"));
const Unknown = lazy(() => import("@/pages/unknown/unknown"));
const Contact = lazy(() => import("@/pages/contact/contact"));
const Project= lazy(() => import("@/pages/project/project"));

// Define your routes using the new pattern with layout
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>, // Use the Layout as the top-level component
    children: [
      {
        index: true, // This makes it match the exact "/" path
        element: <Navigate to="/home" replace />
      },
      {
        path: "home",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "portfolio",
        element: <Portfolio />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path: "project",
        element: <Project />
      },
      {
        path: "*",
        element: <Unknown />
      }
    ]
  }
]);

export default router;