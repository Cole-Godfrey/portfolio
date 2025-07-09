import React from 'react'
import Navbar from "./sections/navbar.jsx";
import Hero from "./sections/hero.jsx";

const App = () => {
    return (
        <div className='relative w-screen min-h-screen overflow-x-auto'>
            <Navbar/>
            <Hero/>
        </div>
    )
}

export default App