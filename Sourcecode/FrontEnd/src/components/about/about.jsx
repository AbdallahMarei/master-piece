import React from 'react'
import "./about.css"
import {Link} from "react-router-dom"

function About() {
    return (
        <div>
            <div>
                <h1 className='featured-games-title'>Our Vision</h1>
                <hr />
            </div>
            <div className='about-container'>
                <div className='about-para'>
                    <p>
                        Our goal is to share our experience and our love for board games with the world and the people in it, and to bring joy to everyone around us through board games. Feel free to browse our collection or contact us to add your own board game.
                    </p>
                    <Link to="/games"><button type='button' className='about-btn'>Browse Shop</button></Link>
                </div>
                <img src='images/about-pic.png' alt='characters' />
            </div>
        </div>
    )
}

export default About
