import React from "react";
import { Typewriter } from "react-simple-typewriter";
import profileImage from "../assets/sam.jpeg";

const About = () => {
  return (
    <section
      id="about"
      className="py-10 px-6 sm:px-10 md:px-16 lg:px-20 font-sans"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center gap-12 lg:gap-16">

        {/* Text Content */}
        <div className="w-full lg:w-1/2 text-center lg:text-left">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2">
            Hi, I am
          </h1>

          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-3 leading-tight">
            Samir Rijal
          </h2>

          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[#8245ec] mb-5">
            <span className="text-white">I am a </span>
            <Typewriter
              words={[
                "Web Enthusiast",
                "React Learner",
                "UI Explorer",
                "Tech Learner",
                "Coder",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h3>

          <p className="text-gray-400 text-base sm:text-lg md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
            A tech learner who enjoys building modern and responsive websites
            and continuously improves through learning and practice.
          </p>

          <a
            href="#contact"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            DOWNLOAD CV
          </a>
        </div>

        {/* Profile Image with Unique Animation */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
          <div className="relative w-48 h-48 sm:w-60 sm:h-60 md:w-80 md:h-80 lg:w-[22rem] lg:h-[22rem] rounded-full overflow-hidden border-4 border-purple-700 animate-unique">
            <img
              src={profileImage}
              alt="Samir Rijal"
              className="w-full h-full rounded-full object-cover shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Custom animation */}
      <style>
        {`
          @keyframes uniqueAnimation {
            0% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
            25% { transform: scale(1.05) rotate(3deg) translate(5px, -5px); }
            50% { transform: scale(1) rotate(6deg) translate(0px, 5px); }
            75% { transform: scale(0.95) rotate(3deg) translate(-5px, -5px); }
            100% { transform: scale(1) rotate(0deg) translate(0px, 0px); }
          }

          .animate-unique {
            animation: uniqueAnimation 8s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default About;
