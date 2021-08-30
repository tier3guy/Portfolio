import logo from '../Assets/icon.svg';
import code from '../Assets/code.svg';
import { Link } from 'react-router-dom';
import BlogContainer from './BlogContainer.jsx';
import Footer from "./Footer";
import { useEffect } from 'react';

export default function Blogs(){
  useEffect(() => {
    window.scrollTo(0,0);
  },[])
  
  let daos = "";
  if(window.screen.width > 500) daos = "fade-right";

  return (
    <>
    <div className = "navbar-wrapper ">
      <div className = "logo bloogerssss">
        <div className = "logo-image">
          <img src = {logo} className = "logo-svg"/>
        </div>
        <div className = "logo-text ">
          Avinash Gupta
        </div>
      </div>
      <div className = "nav-items blogger_nav">
        <ul>
          <Link style = {{textDecoration:'none'}} to = '/' className = "nav-item blog-nav-item" id = "home"><a className = "back-botton"><span className = "left-arrow">←</span>Go to Home</a></Link>
        </ul>
      </div>
    </div>
    <div className = "blogs-wrapper" data-aos = {daos}>
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
          date = "30th August 2021"
          tittle = "Girlscript summer of code"
          blog = "GirlScript Summer of Code is the 3 month long Open Source program during summers conducted by GirlScript Foundation, started in 2018, with an aim to help beginners get started with Open Source Development while encouraging diversity.Throughout the program participants contribute to different projects under guidance of experienced mentors. Top participants get exciting goodies and opportunities.There are two types of envolvement here - 1. Participant, 2. Mentor. Unlike name suggesting here ‘Girlscript’. It seems that it’s particularly for girls, but it’s not. It’s for every gender. If you have basic git skills or are first timers or even veteran developers, GirlScript Summer of Code would give you a taste of contributing in a long open source projects. Continuously for 3 months you will contribute to your assigned projects under guidance of experienced mentors. Register yourself as a participant for GSSoc 2021 here. Website Link: https://gssoc.girlscript.tech/"
          author = "Kamya Kumari | GWoC Contributor"
          src = "https://gssoc.girlscript.tech/images/favicon/favicon.png"
          profileLink = "https://www.linkedin.com/in/kamya-kumari-ba5324205/"
        />
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