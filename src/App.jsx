import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Expertise from './components/Expertise';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SpotlightCursor from './components/SpotlightCursor';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="aurora-bg" aria-hidden="true" />
      <SpotlightCursor />
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Experience />
      <Projects />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
