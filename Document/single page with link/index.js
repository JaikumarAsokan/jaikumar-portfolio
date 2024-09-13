import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./component/navbar/Navbar";
import Profile from "./component/profile/Profile";
import About from "./component/about/About";
import MyProject from "./component/myProject/MyProject";
import Contact from "./component/contact/Contact";

function Index() {
  return (
    <>
      <Navbar />
      <Profile />
      <About />
      <MyProject />
      <Contact />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
