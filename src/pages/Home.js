import React from 'react'
import { Link } from "react-router-dom"
import BannerImage from "../assets/travel_01.jpg"
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
        
        <div className="headerContainer" >
            <h1>Create and verify Immutable DOCUMENTS, and save it on CHAIN</h1>
            <p>Greetings and welcome to Godwoken!</p>
            <Link to="/Template "> 
            <button>Connect Wallet</button>
            </Link>
        </div>
    </div>
  )
}

export default Home