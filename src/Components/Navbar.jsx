import logo from '../Assets/icon.svg';

export default function Navbar(){

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
          <li className = "nav-item" id = "home"><a href = "#hero">Home</a></li>
          <li className = "nav-item" id = "abouts"><a href = "#about">About Me</a></li>
          <li className = "nav-item" id = "blogs"><a href = "#">Blogs</a></li>
          <li className = "nav-item" id = "projects"><a href = "#proj">Projects</a></li>
          <li className = "nav-item"><a href = "https://drive.google.com/file/d/1_s2iWXLaH6Uk7YFsqVuD8ggbJ7ruHsBR/view?usp=sharing">Resume</a></li>
        </ul>
      </div>
    </div>
    </>
  );
}