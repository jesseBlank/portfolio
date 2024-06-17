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
            <div className="flex-1 ml-5 gap-5">
                <Link to="/main" className="text-2xl">
                    <span className="text-primary">J</span>esse
                    <span className="text-primary"> B</span>
                    lank</Link>
            </div>
            <div className="flex-none mr-5">
                <ul className="menu menu-horizontal px-1">
                    <li className="my-auto">Full Stack Software Developer</li>
                    <li className="my-auto mx-5">Phoenix, AZ</li>
                    <li>
                        <details>
                            <summary>
                                Links
                            </summary>
                            <ul className="p-2 bg-base-100 rounded-t-none">
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

    )

}

export default Navbar;