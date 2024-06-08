import React from "react";
import profile from "../assets/profile.jpeg"
import zion from "../assets/zion.jpeg"
import grandCanyon from "../assets/grandCanyon.jpeg"
import airplane from "../assets/airplane.jpeg"
import { Fade } from "react-awesome-reveal";
import Carousel from "./Carousel";


const About = () => {

    return (
        <div className="bg-base-100 w-10/12 mx-auto mt-10 fade">
            <div className="flex gap-10">
                {/* <Fade top distance="10%" duration={1500}>
                    <div className="grid grid-rows-2 grid-flow-col gap-4">
                        <img src={profile} alt="profile" className="w-96 rounded-full profile-img zoom drop-shadow-xl shdw" />
                        <img src={zion} alt="zion" className="w-96 rounded-full profile-img zoom drop-shadow-xl shdw" />
                        <img src={grandCanyon} alt="grand canyon" className="w-96 rounded-full profile-img zoom drop-shadow-xl shdw" />
                        <img src={airplane} alt="airplane" className="w-96 rounded-full profile-img zoom drop-shadow-xl shdw" />
                    </div>
                </Fade> */}
                {/* <div className="carousel carousel-center h-72 max-w-md w-2/4 py-4 space-x-4 bg-neutral rounded-box">
                    <div className="carousel-item">
                        <img src={profile} className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src={zion} className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src={grandCanyon} className="rounded-box" />
                    </div>
                    <div className="carousel-item">
                        <img src={airplane} className="rounded-box" />
                    </div>
                </div> */}
                {/* <div className="w-7/12 carousel rounded-box">
                    <div className="carousel-item w-full">
                        <img src={profile} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={zion} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={grandCanyon} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                    <div className="carousel-item w-full">
                        <img src={airplane} className="w-full" alt="Tailwind CSS Carousel component" />
                    </div>
                </div> */}
                <Carousel />
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