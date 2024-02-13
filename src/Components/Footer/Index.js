import { SlSocialFacebook, SlSocialYoutube, SlSocialInstagram} from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
import { LuCopyright } from "react-icons/lu";
import './Index.css'

const Footer=()=>{
    console.log(1)
    return(
        <div className="footerBlog">
            <div className='footerSection'>
            <div className="footerLogoContainer">
            <img src='https://raw.githubusercontent.com/sujith133/maxCleanz/main/maxx-cleanz-high-resolution-logo-transparent.png' alt='logo' className='footerLogo' />
            <div className='nospace'>
                <p className='nospace'><strong>Max Cleanz</strong></p>
                <p className='nospace'><strong>Cleaning Services</strong></p>
                </div>
            </div>
            <div className='subSection'>
                <h3>Company</h3>
                <hr className='hrStyle' />
                <p>About us</p>
                <p>Terms & conditions</p>
                <p>Privacy policy</p>
                
            </div>
            <div className='subSection'>
                <h3>For customers</h3>
                <hr className='hrStyle' />
                <p>Reviews on Us</p>
                <p>Categories near you</p>
                <p>Blog</p>
                <p>Contact us</p> 
            </div>
            
            <div className='subSection'>
                <h3>contact us</h3>
                <hr className='hrStyle' />
                <p>Email: @gmail.com</p>
                <p>Contact: 8500267895</p>
                <p>Location: Vishakapatnam</p>
                <p>State: Andhra pradesh</p> 
                <div className="rowContainer space">
                    <a href="https://www.google.com/"><SlSocialFacebook className="socialLinks" /></a>
                    <a href="https://www.google.com/"><BsTwitterX className="socialLinks" /></a>
                    <a href="https://www.google.com/"><SlSocialYoutube className="socialLinks" /></a>
                    <a href="https://www.google.com/"><SlSocialInstagram className="socialLinks" /></a>
                </div>
            </div>
            
            </div>
            <hr className="hrBottom" />
            <p className="mobileView"><LuCopyright /> Copyright 2024 VR Max Cleanz Company. All rights reserved.</p>
        </div>
    )
}

export default Footer