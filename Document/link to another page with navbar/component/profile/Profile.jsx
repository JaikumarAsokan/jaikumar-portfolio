import React from 'react'
import ProfileCSS from './Profile.module.css';
import Profile_img from '../../assets/Jaikumar A.png'
import { useParams } from 'react-router-dom';


function Profile(){
   const {id} = useParams()
  return (
    <div className={ProfileCSS.profile}>
        <img src={Profile_img} alt="Jaikumar A" />
        <h1><span>I'm Jai kumar A,</span> frontend developer.</h1>
        <p>I am a frontend developer with a proven ability to collaborate effectively with senior developers.</p>
        <div className={ProfileCSS.profileAction}>
            <div className={ProfileCSS.profileConnect}>Connect with me</div>
            <div className={ProfileCSS.profileResume}>My resume</div>
        </div>
        <div className={ProfileCSS.username}><h1>User name : {id}</h1></div>
    </div>

    
  )
}

export default Profile