import React, { useEffect } from 'react';
import Navbar from './Components/Navbar';
import Landing from './Components/Landing';
import About from './Components/About';
import Experience from './Components/Experience';
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
            offset: 100,
        });
    }, []);

    return (
        <div className="App">
            <Navbar />
            <Landing />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </div>
    );
}

export default App;
