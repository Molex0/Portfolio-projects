import NavBar from './components/NavBar/NavBar';
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
  return (
    <ParallaxProvider>
      <NavBar/>
      <About/>
      <Projects/>
      <Contact/>
      <Footer/>
    </ParallaxProvider>
  );
}

export default App;
