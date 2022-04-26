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

  const [cursorVariant, setCursorVariant] = useState("default");


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
    text: {
      height: 150,
      width: 150,
      x: mousePosition.x - 75,
      y: mousePosition.y - 75,
      backgroundColor: "yellow",
      mixBlendMode: "difference"
    }
  }
  
  return (
    <>
    <div className="app">
    <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
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
