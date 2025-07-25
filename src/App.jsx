import React from 'react'
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";
import SkillsSummary from "./sections/SkillsSummary.jsx";
import Skills from "./sections/skills.jsx";

const App = () => {
    return (
        <div className='relative w-screen min-h-screen overflow-x-auto'>
            <Navbar/>
            <Hero/>
            <SkillsSummary/>
            <Skills/>
        </div>
    )
}

export default App