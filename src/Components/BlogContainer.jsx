
export  default function BlogContainer(props){
  return(
    <>
      <div className = "blog-conatiner">
        <div className = "author date">Date ~ {props.date}</div>
        <div className = "blog-text">
          <div className = "blog-content">
            <h1 className="h1-bloger">{props.tittle}</h1>
            <h3>{props.blog}</h3>
          </div>
          <div className = "blog-content-image-wrapper">
            <img src = {props.src} className = "blogImage"/>
          </div>
        </div>
        <div className = "author">Author : {props.author}</div>
      </div>
    </>
  );
}