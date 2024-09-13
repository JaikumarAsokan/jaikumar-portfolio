import React from 'react'
import NavbarCSS from "./Navbar.module.css"
import { Link,Outlet } from 'react-router-dom'
import ProfileCSS from '../profile/Profile.module.css';
import Profile_img from '../../assets/Jaikumar A.png'


function Navbar(){
  return (<>
    <div className={NavbarCSS.nav}>
        <h1>Jai Kumar A</h1>
        <ul className={NavbarCSS.navMenu}>
            <li><Link to="/" className={NavbarCSS.link}>Home</Link></li>
            <li> <Link to="/profile" className={NavbarCSS.link}> Profile  </Link></li>
            <li> <Link to="/about" className={NavbarCSS.link}>About me</Link> </li>
            {/* <li> <Link to="/education">Education</Link></li> */}
            <li> <Link to="/project" className={NavbarCSS.link}>My project</Link> </li>
            <li> <Link to='/contact' className={NavbarCSS.link}>Contact</Link> </li>
        </ul>
        <div className={NavbarCSS.navConnect}>Connect with me</div>
        <Outlet/>
    </div>

    {/* <div className={ProfileCSS.profile}>
        <img src={Profile_img} alt="Jaikumar A" />
        <h1><span>I'm Jai kumar A,</span> frontend developer.</h1>
        <p>I am a frontend developer with a proven ability to collaborate effectively with senior developers.</p>
        <div className={ProfileCSS.profileAction}>
            <div className={ProfileCSS.profileConnect}>Connect with me</div>
            <div className={ProfileCSS.profileResume}>My resume</div>
        </div>
    </div> */}

    </>
  )
}

export default Navbar