import { useState } from "react";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';



const Dropdown = ()=>{
    const dropdown = ['Darken-black','Coloured-Grey','Coloured-Blue','Coloured-White','Coloured-Pink'];
    
    const [isTrue,SetIstrue] = useState(false);
    const [dropdownValue,SetDropdownValue] = useState('Darken-Black')
    function controlIstrue(){
        if(isTrue){
            SetIstrue(false);
        }
        else{
            SetIstrue(true);
        }
    }

    return(

      <div className="dropdown-menu">
        <div className="options">
        { isTrue && dropdown.map((element)=>(
            <div onClick={(e)=>{
                SetDropdownValue(e.target.innerText)
            }}>{element}</div>
        ))
      }
      </div>
      <div id="stickybutton" onClick={controlIstrue}>{dropdownValue}<ArrowDropDownIcon/></div>
      </div>
    )
}
export default Dropdown;