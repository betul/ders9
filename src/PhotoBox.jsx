import "./photo-box.css"

function PhotoBox(props) {
  
  return (
    <div className="photoBox">
      <img src={props.url}  alt=""/>
      <h2>{props.author}</h2>
      <i className="btn">  {props.like}</i>
      <i> {props.download} </i>
      <p> {props.tag}</p>
    </div>
  )
}

export default PhotoBox