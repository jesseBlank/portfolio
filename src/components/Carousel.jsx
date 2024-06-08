import React, { useState, useEffect } from 'react';
import profile from "../assets/profile.jpeg"
import zion from "../assets/zion.jpeg"
import grandCanyon from "../assets/grandCanyon.jpeg"
import airplane from "../assets/airplane.jpeg"

const Carousel = () => {
    const images = [profile, zion, grandCanyon, airplane];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000); // Change the slide every 3 seconds

        return () => clearInterval(interval); // Clean up the interval on component unmount
    }, [images.length]);

    return (
        <div className="w-7/12 carousel rounded-box">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`carousel-item w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                    <img src={image} className="w-full" alt="Carousel component" />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
