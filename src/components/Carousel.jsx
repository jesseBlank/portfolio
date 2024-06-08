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
        }, 3000);

        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="w-7/12 carousel">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`w-full ${index === currentIndex ? 'block' : 'hidden'}`}
                >
                    <img src={image} className="h-80 w-64 rounded-full" alt="Carousel component" />
                </div>
            ))}
        </div>
    );
};

export default Carousel;
