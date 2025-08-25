import React, {useEffect, useState} from 'react'
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import SkillsSummary from "./sections/SkillsSummary.jsx";
import Skills from "./sections/skills.jsx";
import ReactLenis from "lenis/react";
import About from "./sections/about.jsx";
import Projects from "./sections/Projects.jsx";
import ContactSummary from "./sections/ContactSummary.jsx";
import Contact from "./sections/Contact.jsx";
import {useProgress} from "@react-three/drei";

const App = () => {
    const {progress} = useProgress();
    const [isReady, setIsReady] = useState(false)
    console.log(isReady)
    useEffect(() => {
            if (progress === 100) {
                setIsReady(true);
            }
    }, [progress]);
    
    return (
        <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
            {!isReady && (
                <div className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-black text-white transition-opacity duration-700 font-light">
                    <p className="mb-4 text-xl tracking-widest animate-pulse">
                        Loading {Math.floor(progress)}%
                    </p>
                    <div className="relative h-1 overflow-hidden rounded w-60 bg-white/20">
                        <div
                            className="absolute top-0 left-0 h-full transition-all duration-300 bg-white"
                            style={{ width: `${progress}%` }}
                        ></div>
                    </div>
                </div>
            )}
            <div className={`${isReady ? "opacity-100" : "opacity-0"}
             transition-opacity duration-1000`}>
                <Navbar/>
                <Hero/>
                <SkillsSummary/>
                <Skills/>
                <About/>
                <Projects/>
                <ContactSummary/>
                <Contact/>
            </div>
        </ReactLenis>
    )
}

export default App