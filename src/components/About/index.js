import {SectionMe} from './style'
const About = ({img, name, description}) => {
    
    return (
      <SectionMe>
        <div id="foto">
                <img src={img} alt={name}/>
            </div>
            <div id="texto">
                <h1>Sobre</h1>
                <p>{description}</p>
            </div>

      </SectionMe>
    )
  }
  export default About;