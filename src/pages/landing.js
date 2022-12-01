import React from 'react';
import FCLogo from '../assets/FCLogo.png'
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";



export default function Landing() {
    return ( 
        <div className="landing">
            <div className="landing-overlay"></div>
            <video src="https://verzifier.com/wp-content/uploads/2022/11/FCVideo.mp4" autoPlay loop muted />
            <div className="landing-content">
                <img className="img-fluid" alt="Fighting Chance" href="#" src={FCLogo} />
                <Link to={'/encounter'}><Button className="landing-button button">Generate Encounter</Button></Link>
            </div>
        </div>
    )
}