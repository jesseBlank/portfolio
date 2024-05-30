import React from "react";
import linkedIn from "../assets/linkedIn.webp"
import github from "../assets/github.webp"
import gmail from "../assets/gmail.webp"
import resume from "../assets/resume.webp"
import { Link } from "react-router-dom";

const Farewell = () => {

    return (
        <div className="w-10/12 mx-auto">
            <h1 className="text-5xl font-bold pb-6 text-center mt-10 text-primary">Thank you for stopping by!</h1>
            <div>
                <ul className="flex justify-between w-8/12 mx-auto my-10">
                    <li className="flex gap-2">
                        <img src={linkedIn} alt="linkedIn" className="w-8" />
                        <Link to="https://www.linkedin.com/in/jesse-blank/" className="my-auto">LinkedIn</Link>
                    </li>
                    <li className="flex gap-2">
                        <img src={github} alt="github" className="w-8" />
                        <Link to="https://github.com/jesseBlank" className="my-auto">Github</Link>
                    </li>
                    <li className="flex gap-2">
                        <img src={gmail} alt="gmail" className="w-8" />
                        <p className="my-auto">jesselloydblank@gmail.com</p>
                    </li>
                </ul>
            </div>
            <div>
                <img src={resume} alt="resume" className="mx-auto" />
            </div>
        </div>
    )

}

export default Farewell;