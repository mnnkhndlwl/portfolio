import {Projects,Footer,Header,Skills,Testimonial,About} from './container/index'
import {Navbar} from './components/index';
import "./App.scss";
import { useState,useEffect } from 'react';
import { motion } from 'framer-motion';

const App = () => {

  const [mousePosition, setMousePosition] = useState({
    x: 50,
    y: 50
  });

  const [cursorvariants,setcursorvariants ] = useState("default");

  useEffect(() => {
    const mouseMove = e => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      })
    }

    window.addEventListener("mousemove", mouseMove);

    return () => {
      window.removeEventListener("mousemove", mouseMove);
    }
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  }
  
  return (
    <>
    <div className="app">
    <motion.div
        className='cursor'
        variants={variants}
        animate={cursorvariants}
      />
    <Navbar />
      <Header />
      <div className='kuch'>
      <About />
      <Projects />
      <Skills />
      <Testimonial />
      <Footer />
      </div>
    </div>
    </>
  );
}

export default App;
