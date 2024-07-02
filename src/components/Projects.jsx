import React from "react";
import musicestVideo from "../videos/musicestVideo.mp4"
import blackjack from "../videos/BlackJack.mp4"
import bac from "../videos/BAC.mp4"
import starGazer from "../videos/project-star.mp4"
import { Link } from "react-router-dom";

const Projects = () => {

    return (
        <div className="container mx-auto px-4">
            <div className="text-center md:text-left md:ml-32">
                <h3>Projects</h3>
                <h1 className="text-4xl md:text-5xl font-bold pb-6">What have I done?</h1>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto w-full md:w-9/12">
                <div className="card bg-neutral-content shadow-lg mx-auto mb-20">
                    <figure>
                        <video src={musicestVideo} controls alt="musicest" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title text-primary">
                                Musicest
                            </h2>
                            <Link to="https://github.com/jesseBlank/musicest" className="btn btn-outline btn-primary">Github</Link>
                        </div>
                        <p className="italic">Ecommerce site. Buy musical instruments. Google OAuth implemented.</p>
                        <div className="card-actions justify-end">
                            <p><span className="font-bold">Front End: </span>React.js</p>
                            <p><span className="font-bold">Back End: </span>Node.js with Express</p>
                            <p><span className="font-bold">Database and tools: </span>MongoDB, TailwindCSS</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-neutral-content shadow-lg mx-auto mb-20">
                    <figure>
                        <video src={bac} controls alt="bac" className="w-full" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title text-primary">
                                BAC
                            </h2>
                            <Link to="https://github.com/jesseBlank/Employee-Management-System---BAC" className="btn btn-outline btn-primary">Github</Link>
                        </div>
                        <p className="italic">Employee management system. Login as administator and view employee profiles. Uses stylish dashboard.</p>
                        <div className="card-actions justify-end">
                            <p><span className="font-bold">Front End: </span>React.js</p>
                            <p><span className="font-bold">Back End: </span>Java with Spring Boot</p>
                            <p><span className="font-bold">Database and tools: </span>MySQL, TailwindCSS</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mx-auto w-full md:w-9/12">
                <div className="card bg-neutral-content shadow-xl mx-auto my-5">
                    <figure>
                        <video src={starGazer} alt="project star gazer" controls className="w-full" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title text-primary">
                                Project Stargazer
                            </h2>
                            <Link to="https://github.com/jesseBlank/Project-StarGazer" className="btn btn-outline btn-primary">Github</Link>
                        </div>
                        <p className="italic">Implemented NASA Astronomy Picture of the Day API. User can log in and save NASA pictures to their dashboard to review later.</p>
                        <div className="card-actions justify-end">
                            <p><span className="font-bold">Front End: </span>HTML, Jinja</p>
                            <p><span className="font-bold">Back End: </span>Python, Flask</p>
                            <p><span className="font-bold">Database and tools: </span>NASA Astronomy Picture of the Day API, MySQL</p>
                        </div>
                    </div>
                </div>
                <div className="card bg-neutral-content shadow-xl mx-auto my-5">
                    <figure>
                        <video src={blackjack} controls alt="blackjack" />
                    </figure>
                    <div className="card-body">
                        <div className="flex justify-between">
                            <h2 className="card-title text-primary">
                                BlackJack!
                            </h2>
                            <Link to="https://github.com/jesseBlank/BlackJack" className="btn btn-outline btn-primary">Github</Link>
                        </div>
                        <p className="italic">Used my background in casino management to make BlackJack! game. Algorithms written in JavaScript.</p>
                        <div className="card-actions justify-end">
                            <p><span className="font-bold">Front End: </span>HTML, CSS</p>
                            <p><span className="font-bold">Back End: </span>JavaScript</p>
                            <p><span className="font-bold">Tools: </span>Deck of Cards API</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Projects;