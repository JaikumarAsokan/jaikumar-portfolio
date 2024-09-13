import React from 'react'
import NavbarCSS from "./Navbar.module.css"

function Navbar(){
  return (
    <div className={NavbarCSS.nav}>
        <h1>Jai Kumar A</h1>
        <ul className={NavbarCSS.navMenu}>
            <li>Home</li>
            <li>About Me</li>
            <li>Education</li>
            <li>My project</li>
            <li>Contact</li>
        </ul>
        <div className={NavbarCSS.navConnect}>Connect with me</div>
    </div>
  )
}

export default Navbar