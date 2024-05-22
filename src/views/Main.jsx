import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Farewell from "../components/Farewell";


const Main = () => {

    return (
        <div>
            <Navbar />
            <About />
            <Skills />
            <Projects />
            <Farewell />
        </div>
    )

}

export default Main;