import React from "react";
import collaboration from "../assets/collaboration.png"
import development from "../assets/development.png"
import problem from "../assets/problem.png"
import oop from "../assets/oop.webp"
import java from "../assets/java.webp"
import html from "../assets/html.png"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"

const Skills = () => {

    return (

        <div>
            <div className="text-right mr-32">
                <h3>Skills</h3>
                <h1 className="text-5xl font-bold pb-6">What I do</h1>
            </div>


            <div className="grid grid-flow-col gap-5 text-center auto-cols-max justify-center mx-auto w-8/12 my-6">
                <div className="flex flex-col">
                    <img src={collaboration} alt="collaboration" className="w-52 mx-auto p-2 bg-primary-content rounded-box shadow-lg" />
                    <h5 className="font-bold text-center text-xl my-1">Collaboration</h5>
                    <p className="w-64">Collaborate by communicating openly and adapting quickly.</p>
                </div>
                <div className="flex flex-col">
                    <img src={development} alt="development" className="w-52 mx-auto p-2 bg-primary-content rounded-box shadow-lg" />
                    <h5 className="font-bold text-center text-xl my-1">Development</h5>
                    <p className="w-64">Practitioner of agile development and clean code.</p>
                </div>
                <div className="flex flex-col">
                    <img src={problem} alt="problem solving" className="w-52 mx-auto p-2 bg-primary-content rounded-box shadow-lg" />
                    <h5 className="font-bold text-center text-xl my-1">Problem Solving</h5>
                    <p className="w-64">Creative innovative thinker. Implement unique solutions.</p>
                </div>
                <div className="flex flex-col">
                    <img src={oop} alt="oop" className="w-52 mx-auto p-2 bg-primary-content rounded-box shadow-lg" />
                    <h5 className="font-bold text-center text-xl my-1 w-52 mx-auto">Object-Oriented Programming</h5>
                    <p className="w-64">Proficient at creating modular, reusable, and maintaining code.</p>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-11/12 mx-auto gap-5">
                <div className="grid flex-grow w-64">
                    <h3 className="text-center text-3xl font-bold my-2">Languages</h3>
                    <div className="h-32 bg-primary rounded-box place-items-center text-white shadow-lg">
                        <ul className="grid grid-rows-2 grid-flow-col mt-8 text-center">
                            <li>
                                <img src={html} alt="html" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={css} alt="css" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={javascript} alt="javascript" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={python} alt="python" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={java} alt="java" className="w-10 rounded-lg" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid flex-grow w-64">
                    <h3 className="text-center text-3xl font-bold my-2">Frameworks/Libraries</h3>
                    <div className="h-32 bg-primary rounded-box place-items-center text-white shadow-lg">
                        <ul className="grid grid-rows-3 grid-flow-col mt-6 text-center">
                            <li>Flask</li>
                            <li>Node.js</li>
                            <li>Jinja2</li>
                            <li>Spring Boot</li>
                            <li>jQuery</li>
                            <li>React</li>
                            <li>Express</li>
                            <li>TailwindCSS</li>
                            <li>Bootstrap</li>
                        </ul>
                    </div>
                </div>
                <div className="grid flex-grow w-64">
                    <h3 className="text-center text-3xl font-bold my-2">Databases/Tools</h3>
                    <div className="h-32 bg-primary rounded-box place-items-center text-white shadow-lg">
                        <ul className="grid grid-rows-3 grid-flow-col mt-6 text-center">
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Mongoose</li>
                            <li>AJAX</li>
                            <li>REST API</li>
                            <li>JSON</li>
                            <li>Git/GitHub</li>
                            <li>Thunderclient</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br />
            <br />
            <br />
            <br />

        </div>
    )

}

export default Skills;