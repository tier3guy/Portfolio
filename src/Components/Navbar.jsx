import logo from '../Assets/icon.svg';
import { Link } from 'react-router-dom';

export default function Navbar(){
  
  const [active,setActive] = useState(false);

  const scrolling = () => {
    if(window.scrollY > 0) setActive(true);
    else setActive(false);
  }

  window.addEventListener('scroll',scrolling);

  return (
    <>
    <div className = {(active) ? "navbar-wrapper scrolling_effect" : "navbar-wrapper"}>
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
          <li className = "nav-item" id = "home"><a href = "#hero">Home</a></li>
          <li className = "nav-item" id = "abouts"><a href = "#about">About Me</a></li>
          <Link style = {{textDecoration:'none'}} to = 'blogs' className = "nav-item" id = "blogs"><a>Blogs</a></Link>
          <li className = "nav-item" id = "projects"><a href = "#proj">Projects</a></li>
          <li className = "nav-item"><a href = "https://drive.google.com/file/d/1_s2iWXLaH6Uk7YFsqVuD8ggbJ7ruHsBR/view?usp=sharing">Resume</a></li>
        </ul>
      </div>
    </div>
    </>
  );
}