import React from "react";
import "./App.css";
import { HomePage } from "./Components/page/HomePage/HomePage";
import { RegisterPage } from "./Components/page/RegisterPage/RegisterPage";

function App() {
  return (
    <div className="appMain">
      {/* <HomePage /> */}
      <RegisterPage />
    </div>
  );
}

export default App;
