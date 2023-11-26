import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login/Login";
import MainLayout from "./MainLayout";
import Signup from "./login/SignupPage";
import LoginT from "./login/LoginT";
import { LoginComponent } from "./login/NewLogin";

function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route
          path="/"
          element={
            <LoginComponent
              onLogin={function (username: string, password: string): void {
                throw new Error("Function not implemented.");
              }}
            />
          }
        /> */}
        <Route path="/signup" element={<Signup />} />
        <Route path="/mainlayout/*" element={<MainLayout />} />
      </Routes>
    </div>
  );
}

export default Routing;
