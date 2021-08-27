import Hero_image from '../Assets/hero_Image.svg'
import AOS from 'aos';
import 'aos/dist/aos.css'; 
AOS.init({
  offset: 600,
  duration: 1000,
});
let daos = "";
if(window.screen.width > 500) daos = "fade-right";

export default function Hero(){
  return(
    <>
      <div className = "hero-wrapper" id = "hero" data-aos = {daos}>
        <div className = "hero-img-wrapper">
          <img src = {Hero_image} className = "hero-img"/>
        </div>
        <div className = "hero-text-wrapper">
          <h1>Hola !</h1>
          <h2>I am Avinash, a frontend developer and an IT engineer.</h2>
          <h3>Want to know more scroll down <span className = "down-arrow">↓</span></h3>
        </div>
      </div>
    </>
  );
}