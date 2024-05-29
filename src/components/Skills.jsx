import React from "react";
import collaboration from "../assets/collaboration.png"
import development from "../assets/development.png"
import problem from "../assets/problem.png"
import oop from "../assets/oop.webp"
import java from "../assets/java.webp"
import html from "../assets/html.webp"
import css from "../assets/css.png"
import javascript from "../assets/javascript.png"
import python from "../assets/python.png"
import flask from "../assets/flask.png"
import node from "../assets/node.svg"
import jinja from "../assets/jinja.png"
import springBoot from "../assets/springBoot.png"
import jquery from "../assets/jquery.webp"
import react from "../assets/react.png"
import express from "../assets/express.png"
import tailwind from "../assets/tailwind.svg"
import bootstrap from "../assets/bootstrap.png"
import api from "../assets/api.png"
import ajax from "../assets/ajax.png"
import git from "../assets/git.png"
import github from "../assets/github.png"
import json from "../assets/json.png"
import mongo from "../assets/mongo.png"
import mongoose from "../assets/mongoose.png"
import mysql from "../assets/mysql.svg"
import thunderclient from "../assets/thunderclient.webp"

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
                    <div className="h-32 bg-base-200 bg-rounded-box place-items-center text-white shadow-lg rounded-xl">
                        <ul className="flex justify-between my-10 mx-10">
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
                                <img src={python} alt="html" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={java} alt="java" className="w-10 rounded-lg" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid flex-grow w-64">
                    <h3 className="text-center text-3xl font-bold my-2">Frameworks/Libraries</h3>
                    <div className="h-32 bg-base-200 shadow-lg rounded-xl">
                        <ul className="flex justify-between mx-10 my-4">
                            <li>
                                <img src={flask} alt="flask" className="w-10" />
                            </li>
                            <li>
                                <img src={node} alt="node" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={jinja} alt="jinja" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={springBoot} alt="springBoot" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={jquery} alt="jquery" className="w-10 rounded-lg" />
                            </li>
                        </ul>
                        <ul className="flex justify-between mx-10">
                            <li>
                                <img src={react} alt="react" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={express} alt="express" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={tailwind} alt="tailwind" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={bootstrap} alt="bootstrap" className="w-10 rounded-lg" />
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid flex-grow w-64">
                    <h3 className="text-center text-3xl font-bold my-2">Databases/Tools</h3>
                    <div className="h-32 bg-base-200 shadow-lg rounded-xl">
                        <ul className="flex justify-between mx-10 my-4">
                            <li>
                                <img src={mysql} alt="mysql" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={mongo} alt="mongo" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={mongoose} alt="mongoose" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={ajax} alt="ajax" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={api} alt="api" className="w-10 rounded-lg" />
                            </li>
                        </ul>
                        <ul className="flex justify-between mx-10">
                            <li>
                                <img src={json} alt="json" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={git} alt="git" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={github} alt="github" className="w-10 rounded-lg" />
                            </li>
                            <li>
                                <img src={thunderclient} alt="thunderclient" className="w-10 rounded-lg" />
                            </li>
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