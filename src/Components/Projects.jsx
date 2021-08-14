import Projects from '../Data/ProjectData';
import Card from './Card';

export default function Project_Section(){
  return(
    <>
      <div className = "projects-wrapper" id="proj" data-aos = "fade-right">
        <h1 className = "h1">My Project Works</h1>
        <div className = "projects-card-wrapper">
          {
            Projects.map((card)=>{
              return <Card project_link = {card.project_link} tittle = {card.tittle}/>
            })
          }
        </div>
      </div>
    </>
  );
}