import logo from '../Assets/icon.svg'

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
          <li className = "nav-item" id = "home"><a href = "#hero">Go to Home</a></li>
        </ul>
      </div>
    </div>
    </>
  );
}