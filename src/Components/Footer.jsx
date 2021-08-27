import bg from '../Assets/background.svg';
import Arrow from '../Assets/arrow.svg'
export default function Footer(){
  return (
    <>
      <div className = "footer-wrapper" data-aos = "zoom-in" id="contact">
        <div className = "connect">
          <div className = "connect-image-wrapper">
            <img src = {bg} className = "connect-image"/>
          </div>
          <div className = "connect-text-wrapper">
            <h1 className = "h1">Wanna Connect ?</h1>
            <h3>"We are like islands in the sea, separate on the surface but connected in the deep"</h3>
            <h3>~ William James</h3>
            <h3>So, lets get connected <span id = "and">&&</span> grow together.</h3>
            <img src = {Arrow} className = "arrow-img"/>
          </div>
        </div>
        <ul className = "socials">
          <li><a href = "https://www.linkedin.com/in/avinash-gupta-3321041ba/"><i class="fab fa-linkedin-in"></i></a></li>
          <li><a href = "https://www.facebook.com/profile.php?id=100042540223986"><i class="fab fa-facebook-f"></i></a></li>
          <li><a href = "https://www.instagram.com/gupta_g_62/"><i class="fas fa-hashtag"></i></a></li>
          <li><a href = "https://www.youtube.com/channel/UCwxisguWu-DSj-i0fSc1L1g"><i class="fab fa-youtube"></i></a></li>
          <li><a href = "https://twitter.com/Avinash35925012?s=08"><i class="fab fa-twitter"></i></a></li>
        </ul>
      </div>
    </>
  );
}