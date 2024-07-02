import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {

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

        <div className="navbar bg-neutral-content rounded-lg w-11/12 mx-auto drop-shadow-md">
            <div className="flex flex-col md:flex-row items-center w-full">
                <div className="flex-1 ml-5 text-center md:text-left">
                    <span className="text-primary">J</span>esse
                    <span className="text-primary ml-1">B</span>
                    lank
                </div>
                <div className="flex-none mr-5 w-full md:w-auto mt-4 md:mt-0 text-center">
                    <ul className="menu menu-horizontal flex-col md:flex-row px-1 text-center md:text-left">
                        <li className="my-auto">Full Stack Software Developer</li>
                        <li className="my-auto mx-0 md:mx-5">Phoenix, AZ</li>
                        <li className="my-auto mx-0 md:mx-5">
                            <details className="dropdown">
                                <summary className="cursor-pointer">
                                    Links
                                </summary>
                                <ul className="p-2 bg-base-100 rounded-t-none dropdown-content">
                                    <li>
                                        <button onClick={onButtonClick}>
                                            Resume
                                        </button>
                                    </li>
                                    <li>
                                        <Link to="https://www.linkedin.com/in/jesse-blank/">LinkedIn</Link>
                                    </li>
                                    <li>
                                        <Link to="https://github.com/jesseBlank">Github</Link>
                                    </li>
                                </ul>
                            </details>
                        </li>
                    </ul>
                </div>
            </div>
        </div>

    )

}

export default Navbar;