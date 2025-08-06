import React from 'react'
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import SkillsSummary from "./sections/SkillsSummary.jsx";
import Skills from "./sections/skills.jsx";
import ReactLenis from "lenis/react";
import About from "./sections/about.jsx";

const App = () => {
    return (
        <ReactLenis root className='relative w-screen min-h-screen overflow-x-auto'>
            <Navbar/>
            <Hero/>
            <SkillsSummary/>
            <Skills/>
            <About/>
        </ReactLenis>
    )
}

export default App