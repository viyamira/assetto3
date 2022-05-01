import React from 'react'
import logo from "../assets/Logo1.jpg";
import { Link } from "react-router-dom";
import ViewListIcon from '@mui/icons-material/ViewList';
import "../styles/Navbar.css";
function Navbar(){

  return (
    <div className="navbar">
        <div className="leftSide" >
        <img src={logo} />
        </div>
        <div className="rightSide">
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Verify">Verify</Link>
            <Link to="/create">create</Link>
            <Link to="/Connect_Wallet">Connect Wallet</Link>
            <button>
            <ViewListIcon />
            </button>
        </div>

    </div>
  )
}

export default Navbar
