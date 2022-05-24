import Navbar from './Components/Navbar'
import Landing from './Components/Landing'
import About from './Components/About'
import Projects from "./Components/Projects"
import Contact from "./Components/Contact"


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Landing/>
      <About/>
      <Projects/>
      <Contact/>
    </div>
  );
}

export default App;
