import React from "react";
import Header from "./pages/Header";
import ProjectSection from "./pages/ProjectSection";
import AboutMe from "./pages/About";
import Footer from "./pages/Footer";
import ReactDOM from "react-dom/client";
import ErrorComponent from "./pages/ErrorComponent";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Intro from "./pages/Intro";
import SayHello from "./pages/SayHello";

function App() {
  return (
    <div className="app-layout">
      <Header />
      <Outlet />
      <Footer />
      {/* <Intro />
      <ProjectSection />
      <AboutMe />
      <Contact />
      <Footer /> */}
    </div>
  );
}

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Intro />,
      },

      {
        path: "/project",
        element: <ProjectSection />,
      },

      {
        path: "/about",
        element: <AboutMe />,
      },

      {
        path: "/sayHello",
        element: <SayHello />,
      },
    ],

    errorElement: <ErrorComponent />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);
