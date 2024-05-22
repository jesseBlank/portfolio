import React from "react";
import profile from "../assets/profile.jpeg"
import zion from "../assets/zion.jpeg"
import grandCanyon from "../assets/grandCanyon.jpeg"
import airplane from "../assets/airplane.jpeg"

const About = () => {

    return (

        <div className="bg-base-100 w-10/12 mx-auto mt-10">
            <div className="flex gap-10">
                <div className="grid grid-rows-2 grid-flow-col gap-4">
                    <img src={profile} className="w-96 rounded-full profile-img bounce drop-shadow-xl" />
                    <img src={zion} className="w-96 rounded-full profile-img bounce drop-shadow-xl" />
                    <img src={grandCanyon} className="w-96 rounded-full profile-img bounce drop-shadow-xl" />
                    <img src={airplane} className="w-96 rounded-full profile-img bounce drop-shadow-xl" />
                </div>
                <div className="my-auto">
                    <h3>About me</h3>
                    <h1 className="text-5xl font-bold pb-6">Who am I?</h1>
                    <p className="pb-5">Hi, I'm Jesse Blank, a Full Stack Developer with a unique background in casino management. I transitioned into tech through Coding Dojo, where I learned multiple programming languages and tackled complex data structures through daily algorithms.</p>
                    <p className="pb-5">With expertise in both front-end and back-end development, I love creating intuitive user interfaces and robust backend systems. Outside of coding, I enjoy exercise, the outdoors, and family time.</p>
                    <p className="pb-5">Feel free to connect with me on LinkedIn to chat about programming or share hiking adventures!</p>
                </div>
            </div>
        </div>

    )

}

export default About;