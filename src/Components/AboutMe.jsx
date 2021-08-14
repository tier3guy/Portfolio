import About_Image from '../Assets/about.svg'

export default function About(){
  return(
    <>
      <div className = "about-wrapper" id = "about" data-aos = "fade-left">
        <div className = "about-text-wrapper">
          <h1 className = "h1">Who am I?</h1>
          <div className = "section">
          Hi folk! let me introduce myself I am Avinash and right now I am a student and pursuing my Bachelors in Information and Technology. I am self learner and loves to teach mathematics.
          </div>
          <div className = "section">
          I am also an open-source enthusiat and who loves to do contribution in open source projects. I recently joined <a href = "https://fossasia.org/" target = "_blank">FOSSASIA</a> orgranisation. In my past I did contributions in <a href = "https://gssoc.girlscript.tech/" target = "_blank">GSSoC</a> in a frontend project called Algo-Phantoms.
          </div>
          <div className = "section">
          Currently I am looking forward in backend and learning NodeJS.
          </div>

        </div>
        <div className = "about-img-wrapper">
          <img src = {About_Image}/>
        </div>
      </div>
    </>
  );
}