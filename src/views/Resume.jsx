import React from "react";
import resume from "../assets/resume.jpg"
import Navbar from "../components/Navbar";

const Resume = () => {

    return (
        <div>
            <Navbar />
            <img src={resume} alt="resume" className="mx-auto my-20" />
        </div>
    )

}

export default Resume;