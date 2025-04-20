import { useState } from 'react';
import './App.css';
import { ThemeProvider } from "./components/theme-provider";
import { ThemeToggle } from "./components/theme-toggle";
import { Layout } from "./layout/layout";
import { RouterProvider } from "react-router";
import router from "./routes/routes";

function App() {

  return (
    <>
    <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
    </>
  )
}

export default App