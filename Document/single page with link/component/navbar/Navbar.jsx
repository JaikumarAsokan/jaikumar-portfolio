import React from 'react'
import NavbarCSS from "./Navbar.module.css"

function Navbar(){
  return (
    <div className={NavbarCSS.nav}>
        <h1>Jai Kumar A</h1>
        <ul className={NavbarCSS.navMenu}>
            <li> <a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            {/* <li>Education</li> */}
            <li><a href="#project">My project</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={NavbarCSS.navConnect}>Connect with me</div>
    </div>
  )
}

export default Navbar