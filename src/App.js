import react from "react";
import Header from "./Components/Header";
import Input from "./Components/Input";
import Footer from "./Components/Footer";
import { useState } from "react";

const App = ()=>{
  
  const [InputStart,SetInputStart] = useState(false);

  return (

        <div>
         <Header InputStart={InputStart} SetInputStart = {SetInputStart}/>
         <Input SetInputStart={SetInputStart}/>
         <Footer/>
       </div>)
}

export default App;