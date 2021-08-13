import logo from '../Assets/icon.svg';
import code from '../Assets/code.svg';
import { Link } from 'react-router-dom';
import Blog_Array from '../Data/Blog';
import BlogContainer from './BlogContainer.jsx';
import Footer from "./Footer";
import { useEffect } from 'react';

export default function Blogs(){
  useEffect(() => {
    window.scrollTo(0,0);
  },[])

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
        <BlogContainer 
          tittle = "Hack With Infy"
          date = "13th August 2021"
          blog = "Hack with Infy is coding competition for engineering 3rd year students. It was started in 2019. Initially it was of three round competition in which first two rounds were coding competition and third round would be an Hackothon with top 100 coders around the country. The winner used to get a pool prize of 2lakhs INR, the first runner-up used get 1lakh INR and the second runner-up would get 50,000 INR. But from 2021(this year), only two rounds are going to happen, first would be coding roung and second would be hackothon. HackwithInfy also hiers students for jobs. Basically they hiers for 2 roles and they are system engineer(4-5 LPA) and power programmer(8-8.5 LPA). In their coding round they ask 3 question (1-Easy, 1-Medium and 1-Hard)."
          author = "Avinash Gupta"
          src = "https://media.glassdoor.com/l/f5/e9/69/4c/as-part-of-hackwithinfy-2019-grand-finale-infoscion-shows-a-demo-of-the.jpg"/>
        <BlogContainer 
          tittle = "Github Campus Expert"
          date = "11th August 2021"
          blog = "Campus Experts are student leaders that strive to build diverse and inclusive spaces to learn skills, share their experiences, and build projects together. They can be found across the globe leading in-person and online conferences, meetups, and hackathons, and maintaining open source projects.As local leaders, Campus Experts know the challenges students on their campuses face. With the GitHub Campus Experts training, you’ll learn technical and professional skills—like public speaking, technical writing, community leadership, and software development—that will help you build a strong technical community, teach valuable skills, create new opportunities for your student community, and position your institution within a global community of student leaders."
          author = "Avinash Gupta"
          src = "https://education.github.com/assets/next/campus-experts/ce-flag-59b436097e6168e12b543fec9e936037ff777d1c0160fa4b07cd7394d8779418.png"/>
      </div>
    </div>
    <Footer/>
    </>
  );
}