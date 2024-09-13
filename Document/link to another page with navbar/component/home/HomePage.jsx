import React from "react";
import Profile from "../profile/Profile";
import About from "../about/About";
import MyProject from "../myProject/MyProject";
import Contact from "../contact/Contact";
import HomePageCSS from "../home/HomePage.module.css";

function HomePage() {

  return (
    <>
      <div className={HomePageCSS.d1}>Welcome to my profolio</div>
      <Profile />
      <About />
      <MyProject />
      <Contact /> 
    </>
  );
}

export default HomePage;
