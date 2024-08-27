"use client"; // This line makes this component a Client Component

// app/components/ProfileCard.js
import Image from 'next/image';
import { useState, useEffect } from 'react';

export default function ProfileCard() {
    // State to track the current index of the text to display
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    // Array of texts to be displayed
    const texts = [
        'Software Engineer',
        'Laravel Developer',
        'Full Stack Web Developer',
    ];

    useEffect(() => {
        // Interval to change text every 2 seconds
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 2000); // Adjust the duration here (milliseconds) for text change speed

        // Cleanup interval on component unmount
        return () => clearInterval(intervalId);
    }, [texts.length]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 px-4 py-8">
            <div className="text-center">
                <Image
                    src="/numan.jpeg" // Path relative to the public folder
                    alt="Profile"
                    width={200} // Width of the image
                    height={200} // Height of the image
                    className="rounded-full mb-4 mx-auto"
                />
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 text-gray-100">
                    Muhammad Numan
                </h1>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-2 text-gray-100 mb-8 animate-slideIn">
                    {texts[currentTextIndex]}
                </h1>
                <p className="text-gray-100 text-base md:text-lg lg:text-xl max-w-xl mx-auto">
                    I turn ideas into web reality. Experienced in both front-end and back-end development, I craft elegant user interfaces and scalable server-side solutions.
                </p>
            </div>
        </div>
    );
}
