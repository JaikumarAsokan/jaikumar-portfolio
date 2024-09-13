import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Navbar from "./component/navbar/Navbar";
import Profile from "./component/profile/Profile";
import About from "./component/about/About";
import MyProject from "./component/myProject/MyProject";
import Contact from "./component/contact/Contact";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

function Index() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<Navbar/>}/>
          <Route path="/" element={<Navbar/>}/>
          <Route path="/profile" element={<Profile/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/project" element={<MyProject/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="*" element={<h1>*NoPage*</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);
