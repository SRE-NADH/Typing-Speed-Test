
import RefreshIcon from '@mui/icons-material/Refresh';



const Buttons = ()=>{


    return(
        <div className='buttons'>
            <div id="refreshicon"><RefreshIcon/></div>
            <button>esc</button>
            <div className='line-buttons'>
                <button>10</button>
                <button>50</button>
                <button>80</button>
                <button>100</button>
            </div>

        </div>
    )

}
export default Buttons;