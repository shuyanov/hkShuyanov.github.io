import "./App.css";
import { HomePage } from "./Components/page/HomePage/HomePage";
import { RegisterPage } from "./Components/page/RegisterPage/RegisterPage";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { SingIn } from "./Components/page/SingIn/SingIn";
import { EventsPage } from "./Components/page/EventsPage/EventsPage";
import { Publications } from "./Components/page/Publications/Publications";

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
  {
    path: "/events",
    element: <EventsPage />,
  },
  {
    path: "/publications",
    element: <Publications />,
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
