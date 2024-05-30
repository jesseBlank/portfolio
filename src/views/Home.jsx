import React from "react";
import desertSky from "../assets/desertSky.webp"
import { Link } from "react-router-dom";

const Home = () => {
    const backgroundImageStyle = {
        backgroundImage: `url("${desertSky}")`,
    }

    return (
            <div className="hero min-h-screen" style={backgroundImageStyle}>
                <div className="hero-overlay bg-opacity-20"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold text-cyan-950">Hi, I'm Jesse Blank.</h1>
                        <p className="mb-5 text-cyan-950">Nice to meet you.</p>
                        <Link to="/main">
                            <button className="btn glass btn-wide">Enter</button>
                        </Link>
                    </div>
                </div>
            </div>
    )

}

export default Home;