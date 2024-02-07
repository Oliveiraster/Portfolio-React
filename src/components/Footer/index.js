import github from "../../assets/img_footer/icone-github.png"
import linkedin from "../../assets/img_footer/icone-linkedin.png"

import {Rodape} from "./style"

const Footer = () => {
  return (
    <Rodape>
      <p>&copy; Raphael Oliveira</p>
      <div>
        <a href="https://github.com/Oliveiraster" target="_blank" rel="noreferrer" ><img src={github}alt="github"/></a>
        <a href="https://www.linkedin.com/in/oliveiraster/" target="_blank" rel="noreferrer"><img src={linkedin} alt="linkedin"/></a>
      </div>
    </Rodape>
  )
}
export default Footer;
