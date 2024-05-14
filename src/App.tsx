import React from "react";
import "./App.css";
import { HomePage } from "./Components/page/HomePage/HomePage";
import { RegisterPage } from "./Components/page/RegisterPage/RegisterPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingIn } from "./Components/page/SingIn/SingIn";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RegisterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/singIn",
    element: <SingIn />,
  },
]);

function App() {
  return (
    <div className="appMain">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
