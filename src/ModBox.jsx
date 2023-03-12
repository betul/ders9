
import "./ModBox.css"

function ModBox(props) {
    return (
        <div className="mod-box">
            <img src={props.url} alt={props.alt} />
            <h2> {props.modName} </h2>
        </div>
    )
}


export default ModBox