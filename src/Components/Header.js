import react,{useState,useEffect} from "react";
import KeyboardIcon from '@mui/icons-material/Keyboard';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';



const Header =  ({InputStart,SetInputStart})=>{
       const [a,setTime] = useState(15);
      
       useEffect(() => {
        if (a === 0) {
          SetInputStart(false);
        }
      }, [a, SetInputStart]);

       useEffect(()=>{
        let IntervalId;
        if(InputStart){
         IntervalId = setInterval(()=>{
          setTime(prevA => {
            if (prevA <= 1) {
              clearInterval(IntervalId);
              return 0;
            }
            return prevA - 1;
          });
        },1000)
       }
       },[InputStart]) 
       console.log(InputStart)

    return (
        <div className="header">
            <div className='lefthead'>
             <div>
                <h1>TypeCat</h1>
                <KeyboardIcon/>
             </div>
            <p>{a}</p>
            </div>
            <div className="righthead">
              <AccountCircleIcon/>
              <div><span onClick={()=>{
                setTime(15);
              }}>15s </span> <span onClick={()=>{
                setTime(30);
              }}>30s</span> <span onClick={()=>{
                setTime(60);
              }}>60s </span></div>
            </div>
        </div>
    )
}

export default Header;