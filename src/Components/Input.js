
import Buttons from "./Buttons";


const Input = ({SetInputStart})=>{
    function controlText(e){
        SetInputStart(true);
    }

    return (
        <div className="inputfield">
          <textarea onChange={controlText} type="text"  placeholder="asfffj fjffjf jkdjd duhdiud djduh hjdhjd d" />
          <Buttons/>
        </div>
        
    )
}
export default Input;