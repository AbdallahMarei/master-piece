import React from 'react'
import "./hero-img.css"
import {Link} from "react-router-dom"

function HeroImage() {
    return (
        <div className="home-container">
        <div className="home-left">
          <h5>Best Board Games in The Market</h5>
                    <h1>Find your favorite Board Game</h1>
          <p>Check Our store with over 1000+ board game waiting for you to play</p>
          <Link to="/games"><button>GET STARTED <i aria-hidden="true" className="fas fa-angle-right"></i></button></Link>
        </div>
        <div className="home-right">
            <img src="images/dice.png" alt="dice" />
        </div>
    </div>
    )
}

export default HeroImage
