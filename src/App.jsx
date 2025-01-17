import { LoginPage } from "./components/LoginPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { AppLayout } from "./components/AppLayout";
import { Children } from "react";
import FirstDiv from "./components/FirstDiv";
import { Dashboard } from "./components/Dashboard";

export const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <AppLayout />,
    },
    {
      path: "/LoginPage",
      element: <LoginPage />,
    },
    {
      path: "/Dashboard",
      element: <Dashboard />,
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
};
