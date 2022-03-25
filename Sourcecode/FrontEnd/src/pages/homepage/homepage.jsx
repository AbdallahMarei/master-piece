import React from 'react'
import About from '../../components/about/about'
import FeaturedGames from '../../components/featured-games/featured-games'
import HeroImage from '../../components/hero-img/hero-img'
import Testimonials from "../../components/testimonials/testimonials"


function HomePage() {
    return (
        <div>
            <HeroImage />
            <FeaturedGames />
            <About />
            <Testimonials />
        </div>
    )
}

export default HomePage
