import logo from '../Assets/icon.svg';
import code from '../Assets/code.svg';

export default function Blogs(){
  return (
    <>
    <div className = "navbar-wrapper">
      <div className = "logo">
        <div className = "logo-image">
          <img src = {logo} className = "logo-svg"/>
        </div>
        <div className = "logo-text">
          Avinash Gupta
        </div>
      </div>
      <div className = "nav-items">
        <ul>
          <li className = "nav-item" id = "home"><a href = "#hero" className = "back-botton"><span className = "left-arrow">←</span>Go to Home</a></li>
        </ul>
      </div>
    </div>
    <div className = "blogs-wrapper">
      <div className= "blogs-welcome-wrapper">
        <div className = "blogs-image-wrapper">
          <img src = {code} className = "blogs-image"/>
        </div>
        <div className = "blogs-text-wrapper">
          <h1 className = "h1-blogs">Hola, Welcome to Avinash's Blogs !</h1>
          <h2>I do write blogs about diffrent technologies and also differents opportunities.</h2>
          <h3>Scroll down to read my latest blog <span className = "down-arrow">↓</span></h3>
        </div>
      </div>
    </div>
    </>
  );
}