import React from 'react'
import Navbar from "../../components/Navbar/Navbar.js"
import Hero from '../../components/Hero/Hero.js'
import "./Home.css"

function Home() {
    return (
        <div>
            <Navbar title="Mono Word"
                    links={[
                        {link: "https://www.github.com", content: "Features"},{link: "https://www.github.com", content: "Documentation"},{link: "https://www.github.com", content: "Github"}
                    ]}></Navbar>
            <Hero></Hero>
            <div className="content-section">

            </div>
        </div>
    )
}


export default Home
