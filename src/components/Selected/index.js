
import {Select, Fieldset} from "./style"

const Selected = ({valor, Change, option}) => {


  return (
    
      <Fieldset>
          <legend>{option}</legend>
            <Select onChange={Change} id="button" type="range" min="1" max="2" value={valor}/>
      </Fieldset>
    
  )
  
}
export default Selected