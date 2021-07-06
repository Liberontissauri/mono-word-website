import React from 'react'
import icon from "../../img/logo.png"
import "./Hero.css"

function Hero() {
    return (
        <div className="bg-div">
            <img src={icon} className="hero-icon"></img>
            <h2 className="text hero-h2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae eget consectetur pellentesque varius mus id. Sed urna faucibus eget suspendisse faucibus. consectetur adipiscing elit.</h2>
        </div>
    )
}

export default Hero
