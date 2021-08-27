export default function Card(props){
  return(
    <>
    <div className="flip-card cards_wrapper">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          {
            props.tittle
          }
        </div>
        <div className="flip-card-back">
          <a href = {props.project_link}>Visit Project</a>
        </div>
      </div>
    </div>
    </>
  );
}