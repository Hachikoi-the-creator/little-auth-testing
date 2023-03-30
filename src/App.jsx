import React from "react";
import GoogleLogin from "./components/GoogleLogin";
import Logout from "./components/Logout";

export default function App() {
  return (
    <>
      <GoogleLogin />
      <Logout />
    </>
  );
}
