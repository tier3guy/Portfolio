import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./AboutMe";
import Projects from "./Projects";
import Footer from "./Footer";


export default function Home(){
  return(
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Projects/>
      <Footer/>
    </>
  );
}