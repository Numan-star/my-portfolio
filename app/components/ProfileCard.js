"use client"; // This line makes this component a Client Component

// app/components/ProfileCard.js
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ProfileCard() {
  // State to track the current index of the text to display
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Array of texts to be displayed
  const texts = [
    "Software Engineer",
    "Laravel Developer",
    "Full Stack Developer",
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
          src="/numan.png"
          alt="Profile"
          width={210}
          height={210}
          priority
          className="rounded-full mb-7 mx-auto border-2 border-teal-800 shadow-2xl shadow-teal-700 h-50"
        />
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-teal-500 via-gray-300 to-pink-600 bg-clip-text text-transparent">
          Muhammad Numan
        </h1>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-100 mb-8 animate-slideIn">
          {texts[currentTextIndex]}
        </h2>
        <p className="text-gray-100 text-base md:text-lg lg:text-xl max-w-xl mx-auto">
          I turn ideas into web reality. Experienced in both{" "}
          <span className="text-teal-500">front-end</span> and{" "}
          <span className="text-teal-500">back-end</span> development, I craft
          elegant user interfaces and scalable server-side solutions.
        </p>
      </div>
    </div>
  );
}
