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
            <Fade top distance="10%" duration={1500}>
                <About />
                <Skills />
                <Projects />
                <Farewell />
            </Fade>
        </div>
    )

}

export default Main;