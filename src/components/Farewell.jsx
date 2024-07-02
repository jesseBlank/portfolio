import React from "react";
import linkedIn from "../assets/linkedIn.webp"
import github from "../assets/github.png"
import gmail from "../assets/gmail.jpg"
import resumeIcon from "../assets/resume-icon.png"
import { Link } from "react-router-dom";

const Farewell = () => {

    const onButtonClick = () => {
        const pdfUrl = "Jesse Blank - Resume.pdf";
        const link = document.createElement("a");
        link.href = pdfUrl;
        link.download = "Jesse Blank - Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    }

    return (
        <div className="w-11/12 mx-auto">
            <h1 className="text-4xl sm:text-5xl font-bold pb-6 text-center mt-10 text-primary">Thank you for stopping by!</h1>
            <div>
                <ul className="flex flex-col sm:flex-row sm:justify-between items-center w-full sm:w-8/12 mx-auto my-10 space-y-4 sm:space-y-0 sm:space-x-4">
                    <li className="flex gap-2 items-center">
                        <img src={linkedIn} alt="linkedIn" className="w-8" />
                        <Link to="https://www.linkedin.com/in/jesse-blank/" className="my-auto">LinkedIn</Link>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={github} alt="github" className="w-8" />
                        <Link to="https://github.com/jesseBlank" className="my-auto">Github</Link>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={resumeIcon} alt="resume icon" className="w-8" />
                        <button onClick={onButtonClick}>
                            Download Resume
                        </button>
                    </li>
                    <li className="flex gap-2 items-center">
                        <img src={gmail} alt="gmail" className="w-8" />
                        <p className="my-auto">jesselloydblank@gmail.com</p>
                    </li>
                </ul>
            </div>
        </div>
    )

}

export default Farewell;