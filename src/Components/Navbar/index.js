
import { useState } from 'react'
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import './index.css'

const Navbar = () => {
    console.log("nav");
    const [site, setSite] = useState("Home")
    const [city, setCity] = useState("vishakapatnam")
    const [search, setSearch] = useState("")
    const [burger,setBurger] =useState("closed")
    const burgerClicked = ()=>{
        setBurger(burger==="closed"?"opened":"closed")
    }
    const cityChanged =(event)=>{
        console.log(event.target.value)
        setCity(event.target.value)
    }
    const changeSite = (name)=>{
        setSite(name)
    }
    const searchChanged =(event)=>{
        console.log(event.target.value)
        setSearch(event.target.value)
    }
    return (
        <>
        
            <nav className="navContainer">
                <button onClick={()=>burgerClicked()}className='logoImgMobile noButton'>{burger==="opened"?<RxCross2 className='crossButton' />:<RxHamburgerMenu className='crossButton' />}</button>
                <div className='rowContainer tablapView'>
                <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/maxx-cleanz-high-resolution-logo.png" alt="logo" className="logoImgLaptop" />
                <div className='space nospace tablapView'>
                <p className='nospace'><strong>Max Cleanz</strong></p>
                <p className='nospace'><strong>Cleaning Services</strong></p>
                </div>
                
                </div>
                <ul className="navSubContainer laptop">
                    <li onClick={()=>changeSite("home")} className={site==="home"?"highListItem":"listItem"}><Link to="/">Home</Link></li>
                    <li onClick={()=>changeSite("about")} className={site==="about"?"highListItem":"listItem"}><Link to="/aboutus">About Us</Link></li>
                    <li onClick={()=>changeSite("service")} className={site==="service"?"highListItem":"listItem"}><Link to='/service'>Services</Link></li>
                    <li onClick={()=>changeSite("contact")} className={site==="contact"?"highListItem":"listItem"}><Link to="/contacts">Contact Us</Link></li>
                </ul>
                <div className="rowContainer searchBlog">
                    <input className="search-container laptop" type="text" onChange={searchChanged} value={search} placeholder="Search your Service..." />
                    <button type="button" className="noButton laptop"><IoIosSearch /></button>
                    </div>
                    <select onChange={cityChanged} className="laptop dropdown-select" value={city}>
                        <option className="dropdown-option" value="">Select City</option>
                        <option className="dropdown-option" value="Vishakapatnam">Vishakapatnam</option>
                        <option className="dropdown-option" value="Rajamundry">Rajamundry</option>
                        <option className="dropdown-option" value="Hyderabad">Hyderabad</option>
                        <option className="dropdown-option" value="Vijaywada">Vijaywada</option>
                    </select>
                
                <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/maxx-cleanz-high-resolution-logo.png" alt="logo" className="logoImgMobile" />
            </nav>
            {burger==="opened"?           
            (<ul className='logoImgMobile margin dropListContainer'>
                <li onClick={()=>changeSite("home")} className={site==="home"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to="/">Home</Link></li>
                <li onClick={()=>changeSite("about")} className={site==="about"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to="/aboutus">About Us</Link></li>
                <li onClick={()=>changeSite("service")} className={site==="service"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to='/service'>Services</Link></li>
                <li onClick={()=>changeSite("contact")} className={site==="contact"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to="/contacts">Contact Us</Link></li>
            </ul>):(<></>)
            }
            </>
    )
}

export default Navbar
