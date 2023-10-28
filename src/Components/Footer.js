import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import Dropdown from './Dropdown';




const Footer = ()=>{
    

    return(
        <div className='footer'>
         <div className='icons'>
         <GitHubIcon/>
         <LinkedInIcon/>
         <AttachEmailIcon/>
         <InstagramIcon/>
         </div>
        <Dropdown/>
         </div>
         
    )
}

export default Footer;