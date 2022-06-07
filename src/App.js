import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import About from './Components/About'
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"
import AOS from 'aos';
import 'aos/dist/aos.css';
import {useEffect} from "react";

function App() {
        useEffect(() => {
        AOS.init({
            duration: 1000,
            once: true,
        });
    }, []);
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <About data-aos={"fade-down"}/>
      <Projects data-aos={"fade-down"}/>
      <Contact data-aos={"fade-down"}/>
    </div>
  );
}

export default App;
