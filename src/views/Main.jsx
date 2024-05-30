import React from "react";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Farewell from "../components/Farewell";
import { Fade } from "react-awesome-reveal";


const Main = () => {

    return (
        <div>
            <Navbar />
            <Fade>
                <About />
                <Skills />
                <Projects />
                <Farewell />
            </Fade>
        </div>
    )

}

export default Main;