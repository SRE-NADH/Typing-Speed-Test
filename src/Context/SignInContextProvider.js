
import SignInContext from "./SignInContext";
import { useState } from "react";


const SignInContextProvider = (props)=>{
    const [check,SetCheck] = useState(false);
    return(
        <SignInContext.Provider value={check}>
            {props.children}
        </SignInContext.Provider>
    )   
}

export default SignInContextProvider;