import "./section.css"
import ModBox from "./ModBox.jsx"

function Section() {
    return (
      <section id="mod-list">
         <ModBox url="https://lipsum.app/id/7/150x150" alt="Forest" modName="Forest" />   
         <ModBox url="https://lipsum.app/id/8/150x150" alt="Camping" modName="Camping" />   
         <ModBox url="https://lipsum.app/id/48/150x150" alt="Rain" modName="Rain" />   
         <ModBox url="https://lipsum.app/id/64/150x150" alt="City" modName="City" />   
         <ModBox url="https://lipsum.app/id/21/150x150" alt="Cafe" modName="Cafe" />   
         <ModBox url="https://lipsum.app/id/34/150x150" alt="Bird" modName="Bird" />   

      </section>
    )
  
  }

  export default Section