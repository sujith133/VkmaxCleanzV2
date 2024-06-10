import { Link } from 'react-router-dom';
import { SlSocialFacebook, SlSocialYoutube, SlSocialInstagram} from "react-icons/sl";
import { LuCopyright } from "react-icons/lu";
import './Index.css'

const Footer=()=>{
    console.log(1)
    return(
        <div className="footerBlog">
            <div className='footerSection'>
            <div className="footerLogoContainer">
            <img src='https://raw.githubusercontent.com/sujith133/maxCleanz/main/LogoFull.jpg' alt='logo' className='footerLogo' />
            </div>
            <div className='subSection'>
                <h3>Company</h3>
                <hr className='hrStyle' />
                <Link className="highLight"  to="/aboutus"><p className="highLight">About us</p></Link>
                <p className="highLight">Terms & conditions</p>
                <p className="highLight">Privacy policy</p>
                
            </div>
            <div className='subSection'>
                <h3>For customers</h3>
                <hr className='hrStyle' />
                <p className="highLight">Reviews on Us</p>
                <p className="highLight">Categories near you</p>
                <p className="highLight">Blog</p>
                <Link className="highLight"  to="/contacts"><p className="highLight">Contact us</p></Link>
            </div>
            
            <div className='subSection'>
                <h3>contact us</h3>
                <hr className='hrStyle' />
                <p>Email: 	vk@vkmaxcleanzsolutions.com</p>
                <p>Contact: +91 7569057281</p>
                <p>Location: Vishakapatnam</p>
                <p>State: Andhra pradesh</p> 
                <div className="rowContainer space">
                    <a href="https://www.facebook.com/profile.php?id=61556663172124" target="_blank"  rel="noreferrer"><SlSocialFacebook className="socialLinks" /></a>
                    <a href="https://www.youtube.com/channel/UCZDdoNcXNAAh6XAoqBeXTRQ" target="_blank"  rel="noreferrer"><SlSocialYoutube className="socialLinks" /></a>
                    <a href="https://www.instagram.com/vk_max_cleanz_solutions/" target="_blank"  rel="noreferrer"><SlSocialInstagram className="socialLinks" /></a>
                </div>
            </div>
            
            </div>
            <hr className="hrBottom" />
            <p className="mobileView"><LuCopyright /> Copyright 2024 VK Max Cleanz Company. All rights reserved.</p>
        </div>
    )
}

export default Footer