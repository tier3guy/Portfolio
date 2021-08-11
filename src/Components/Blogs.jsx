import logo from '../Assets/icon.svg';
import code from '../Assets/code.svg';
import { Link } from 'react-router-dom';
import Blog_Array from '../Data/Blog';
import BlogContainer from './BlogContainer.jsx';
import Footer from "./Footer";

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
          <Link style = {{textDecoration:'none'}} to = '/' className = "nav-item" id = "home"><a className = "back-botton"><span className = "left-arrow">←</span>Go to Home</a></Link>
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
      <div className = "blog-container-wrapper">
        {
          Blog_Array.map((blog)=>{
            return <BlogContainer date = {blog.date} tittle = {blog.tittle} blog = {blog.blog} author = {blog.author}/>
          })
        }
      </div>
    </div>
    <Footer/>
    </>
  );
}