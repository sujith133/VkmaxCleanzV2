
import { useState } from 'react'
import {v4 as v4uuid} from "uuid"
import { Link } from 'react-router-dom';
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu,RxCross2 } from "react-icons/rx";
import './index.css'

const Navbar = () => {
    const subServicesList = [{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'SPLIT AC REPAIR SERVICES', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/SPLIT_AC_REPAIR_SERVICES.jpeg', 'serviceDescription': 'Expert repairs available for split AC units.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'CAR CLEANING SERVICES', 'serviceName': 'CLEANING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/CAR_CLEANING_SERVICES.jpg', 'serviceDescription': 'Cleaning services for Cars.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'COMMERCIAL INSTANT SERVICES', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/download.jpeg', 'serviceDescription': 'Quick solutions for commercial needs.'}
        ,{'id': v4uuid(), 'serviceCategory': 'KEEPING', 'serviceTitle': 'HOUSE KEEPING SERVICES', 'serviceName': 'HOUSE KEEPING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/housekeeping-service.jpeg', 'serviceDescription': 'Maintaining pristine environments to nurture productivity and well-being.'}
        ,{'id': v4uuid(), 'serviceCategory': 'KEEPING', 'serviceTitle': 'OFFICE KEEPING SERVICES', 'serviceName': 'OFFICE KEEPING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/officekeepingservices.jpg', 'serviceDescription': 'Enhancing workplaces with comprehensive office keeping solutions.'}
        ,{'id': v4uuid(), 'serviceCategory': 'KEEPING', 'serviceTitle': 'HOTEL KEEPING SERVICES', 'serviceName': 'HOTEL KEEPING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/hotelkeepingservices.jpg', 'serviceDescription': 'Transforming guest experiences through top-tier hotel keeping services.'}
        ,{'id': v4uuid(), 'serviceCategory': 'KEEPING', 'serviceTitle': 'VILLA KEEPING SERVICES', 'serviceName': 'VILLA KEEPING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/villakeepingservices.jpg', 'serviceDescription': 'Preserving luxury and comfort with villa keeping excellence.'}
        ,{'id': v4uuid(), 'serviceCategory': 'KEEPING', 'serviceTitle': 'RESTAURANT KEEPING SERVICES', 'serviceName': 'RESTAURANT KEEPING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/restaurantkeeping.jpg', 'serviceDescription': 'Crafting memorable dining atmospheres with restaurant keeping finesse.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'AC SERVICES', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/AC_SERVICES.jpeg', 'serviceDescription': 'Comprehensive services for air conditioning systems.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'AC INSTALLATION & UNINSTALLATION SERVICES', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/AC_INSTALLATION_&_UNINSTALLATION_SERVICES.jpeg', 'serviceDescription': 'Efficient installation and removal of AC units.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'AC Repair & Service', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/AC_Repair_&_Service.jpeg', 'serviceDescription': 'Professional repair and maintenance for AC units.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'Chimney Repair', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/Chimney_Repair.jpeg', 'serviceDescription': 'Swift solutions for chimney issues.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'Refrigerator Repair', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/Refrigerator_Repair.jpeg', 'serviceDescription': 'Reliable repairs for refrigerators.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'Washing Machine Repair', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/Washing_Machine_Repair.jpeg', 'serviceDescription': 'Expert solutions for washing machine problems.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'Water Purifier', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/Water_Purifier.jpeg', 'serviceDescription': 'Quality service for water purifiers.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'Microwave', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/Microwave.jpeg', 'serviceDescription': 'Fast and effective repairs for microwaves.'}
        ,{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'Geyser Repair', 'serviceName': 'AC REPAIR & SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/Geyser_Repair.jpeg', 'serviceDescription': 'Expert solutions for geyser issues.'}
        ,{'id': v4uuid(), 'serviceCategory': 'ELECTRICAL', 'serviceTitle': 'APARTMENT ELECTRICAL SERVICE', 'serviceName': 'ELECTRICAL SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/APARTMENT_ELECTRICAL_SERVICE.jpeg', 'serviceDescription': 'Tailored electrical services for apartments.'}
        ,{'id': v4uuid(), 'serviceCategory': 'ELECTRICAL', 'serviceTitle': 'SHOPS ELECTRICAL SERVICE', 'serviceName': 'ELECTRICAL SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/SHOPS_ELECTRICAL_SERVICE.jpeg', 'serviceDescription': 'Electrical solutions for retail spaces.'}
        ,{'id': v4uuid(), 'serviceCategory': 'ELECTRICAL', 'serviceTitle': 'SHOWROOM ELECTRICAL SERVICE', 'serviceName': 'ELECTRICAL SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/HOME_ELECTRICAL_SERVICE.jpeg', 'serviceDescription': 'Services designed for showroom needs.'}
        ,{'id': v4uuid(), 'serviceCategory': 'ELECTRICAL', 'serviceTitle': 'HOME ELECTRICAL SERVICE', 'serviceName': 'ELECTRICAL SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/HOME_ELECTRICAL_SERVICE2.jpeg', 'serviceDescription': 'Reliable electrical services for homes.'}
        ,{'id': v4uuid(), 'serviceCategory': 'ELECTRICAL', 'serviceTitle': 'ELECTRICIAN SERVICES', 'serviceName': 'ELECTRICAL SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/ELECTRICIAN_SERVICES.jpeg', 'serviceDescription': 'Professional electrician services available.'}
        ,{'id': v4uuid(), 'serviceCategory': 'PLUMBING', 'serviceTitle': 'HOME PLUMBING SERVICE', 'serviceName': 'PLUMBING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/HOME_PLUMBING_SERVICE.jpeg', 'serviceDescription': 'Expert plumbing solutions for homes.'}
        ,{'id': v4uuid(), 'serviceCategory': 'Salon', 'serviceTitle': 'Salon for Women', 'serviceName': 'Salon for Women', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/salonForWomen.jpg', 'serviceDescription': 'Unleash your beauty, indulge in luxury.'}
		,{'id': v4uuid(), 'serviceCategory': 'Salon', 'serviceTitle': 'Salon for Kids & Men', 'serviceName': 'Salon for Kids & Men', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/salonForMen.jpg', 'serviceDescription': 'From little ones to grown gents, grooming made great.'}
		,{'id': v4uuid(), 'serviceCategory': 'home', 'serviceTitle': 'Home Painting', 'serviceName': 'Home Painting', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/painting.jpeg', 'serviceDescription': 'Transforming walls, elevating homes, one brushstroke at a time.'}
        ,{'id': v4uuid(), 'serviceCategory': 'PLUMBING', 'serviceTitle': 'SHOPS PLUMBING SERVICE', 'serviceName': 'PLUMBING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/SHOPS_PLUMBING_SERVICE.jpeg', 'serviceDescription': 'Plumbing services for retail establishments.'}
        ,{'id': v4uuid(), 'serviceCategory': 'PLUMBING', 'serviceTitle': 'SHOWROOM PLUMBING SERVICE', 'serviceName': 'PLUMBING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/SHOWROOM_PLUMBING_SERVICE.jpeg', 'serviceDescription': 'Plumbing solutions for showroom spaces.'}
        ,{'id': v4uuid(), 'serviceCategory': 'PLUMBING', 'serviceTitle': 'APARTMENT PLUMBING SERVICE', 'serviceName': 'PLUMBING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/APARTMENT_PLUMBING_SERVICE.jpeg', 'serviceDescription': 'Tailored plumbing services for apartments.'}
        ,{'id': v4uuid(), 'serviceCategory': 'PLUMBING', 'serviceTitle': 'PLUMBER SERVICE', 'serviceName': 'PLUMBING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/HOME_PLUMBING_SERVICE.jpeg', 'serviceDescription': 'Skilled plumber services available.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CARPENTRY WORK', 'serviceTitle': 'CUPBOARD WORK SERVICES', 'serviceName': 'CARPENTRY WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/CUPBOARD_DESIGNING_SERVICES.jpeg', 'serviceDescription': 'Quality workmanship for cupboards.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CARPENTRY WORK', 'serviceTitle': 'WOOD WORK SERVICES', 'serviceName': 'CARPENTRY WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/WOOD_WORK_SERVICES.jpeg', 'serviceDescription': 'Expert woodworking services offered.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CARPENTRY WORK', 'serviceTitle': 'MODULAR KITCHEN WORK', 'serviceName': 'CARPENTRY WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/MODULAR_KITCHEN_WORK.jpeg', 'serviceDescription': 'Modern solutions for kitchen remodeling.'}
        ,{'id': v4uuid(), 'serviceCategory': 'RAILING WORK', 'serviceTitle': 'ELIVATION RALING WORK SERVICES', 'serviceName': 'RAILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/ELIVATION_RALING_WORK_SERVICES.jpeg', 'serviceDescription': 'Elevation railing solutions provided.'}
        ,{'id': v4uuid(), 'serviceCategory': 'RAILING WORK', 'serviceTitle': 'GATES RAILING WORK SERVICES', 'serviceName': 'RAILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/GATES_RAILING_WORK_SERVICES.jpeg', 'serviceDescription': 'Railing solutions for gates available.'}
        ,{'id': v4uuid(), 'serviceCategory': 'RAILING WORK', 'serviceTitle': 'TABLE AND CHAIR DESIGN SERVICES', 'serviceName': 'RAILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/TABLE_AND_CHAIR_DESIGN_SERVICES.jpeg', 'serviceDescription': 'Creative designs for tables and chairs.'}
        ,{'id': v4uuid(), 'serviceCategory': 'RAILING WORK', 'serviceTitle': 'SHUTTER WORK SERVICES', 'serviceName': 'RAILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/SHUTTER_WORK_SERVICES.jpeg', 'serviceDescription': 'Efficient shutter installation and repair.'}
        ,{'id': v4uuid(), 'serviceCategory': 'RAILING WORK', 'serviceTitle': 'CUSTOMIZED HOTEL TABLES SERVICES', 'serviceName': 'RAILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/CUSTOMIZED_HOTEL_TABLES_SERVICES.jpeg', 'serviceDescription': 'Tailored solutions for hotel tables.'}
        ,{'id': v4uuid(), 'serviceCategory': 'FLOORING WORK', 'serviceTitle': 'WOODEN FLOOR LAYING SERVICES', 'serviceName': 'FLOORING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/WOODEN_FLOOR_LAYING_SERVICES.jpeg', 'serviceDescription': 'Professional wooden floor installation.'}
        ,{'id': v4uuid(), 'serviceCategory': 'FLOORING WORK', 'serviceTitle': 'MARBLE AND GRANITE LAYING SERVICES', 'serviceName': 'FLOORING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/MARBLE_AND_GRANITE_LAYING_SERVICES.jpeg', 'serviceDescription': 'Quality laying services for marble and granite.'}
        ,{'id': v4uuid(), 'serviceCategory': 'SOFA CLEANING', 'serviceTitle': 'SOFA CLEANING', 'serviceName': 'SOFA CLEANING', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/sofa.jpg', 'serviceDescription': 'Our sofa cleaning services ensure the restoration of your furnitures cleanliness and freshness.'}
        ,{'id': v4uuid(), 'serviceCategory': 'WINDOW CLEANING', 'serviceTitle': 'WINDOW CLEANING', 'serviceName': 'WINDOW CLEANING', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/window.jpg', 'serviceDescription': 'Elevate your buildings aesthetics with professional window cleaning services for architectural exteriors.'}
        ,{'id': v4uuid(), 'serviceCategory': 'PEST CONTROL', 'serviceTitle': 'PEST CONTROL', 'serviceName': 'PEST CONTROL', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/pest.jpg', 'serviceDescription': 'Access top-quality pest control solutions tailored to your schedule and needs.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CCTV', 'serviceTitle': 'CCTV SERVICES', 'serviceName': 'CCTV SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/cctv.jpg', 'serviceDescription': 'Discover the premier online cctv service at vk max, offering affordable garment care solutions.'}
        ,{'id': v4uuid(), 'serviceCategory': 'MOTOR', 'serviceTitle': 'MOTOR SERVICES', 'serviceName': 'MOTOR SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/motor.jpg', 'serviceDescription': 'Discover the premier online motor service at vk max, offering affordable garment care solutions.'}
        ,{'id': v4uuid(), 'serviceCategory': 'FLOORING WORK', 'serviceTitle': 'TILES LAYING SERVICES', 'serviceName': 'FLOORING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/TILES_LAYING_SERVICES.jpeg', 'serviceDescription': 'Expert tile installation services provided.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CEILING WORK', 'serviceTitle': 'POP CEILING WORK SERVICES', 'serviceName': 'CEILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/POP_CEILING_WORK_SERVICES.jpeg', 'serviceDescription': 'Quality POP ceiling installation available.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CEILING WORK', 'serviceTitle': 'PVC CEILING WORK SERVICES', 'serviceName': 'CEILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/PVC_CEILING_WORK_SERVICES.jpeg', 'serviceDescription': 'PVC ceiling installation services offered.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CEILING WORK', 'serviceTitle': 'WPUC CEILING WORK SERVICES', 'serviceName': 'CEILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/WPUC_CEILING_WORK_SERVICES.jpeg', 'serviceDescription': 'WPUC ceiling installation solutions provided.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CEILING WORK', 'serviceTitle': 'GYPSUM CEILING WORK SERVICES', 'serviceName': 'CEILING WORK SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/GYPSUM_CEILING_WORK_SERVICES.jpeg', 'serviceDescription': 'Gypsum ceiling installation services available.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'BATHROOM CLEANING SERVICES', 'serviceName': 'CLEANING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/BATHROOM_CLEANING_SERVICES.jpeg', 'serviceDescription': 'Thorough cleaning services for bathrooms.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'RESTAURANT CHAIR CLEANING SERVICE', 'serviceName': 'CLEANING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/RESTAURANT_CHAIR_CLEANING_SERVICE.jpeg', 'serviceDescription': 'Cleaning services for restaurant chairs.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'KITCHEN CLEANING SERVICE', 'serviceName': 'CLEANING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/KITCHEN_CLEANING_SERVICE.jpeg', 'serviceDescription': 'Professional cleaning for kitchens offered.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'HOME DEEP CLEANING SERVICE', 'serviceName': 'CLEANING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/HOME_DEEP_CLEANING_SERVICE.jpeg', 'serviceDescription': 'Deep cleaning solutions for homes.'}
        ,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'DUPLEX HOUSE DEEP CLEANING SERVICES', 'serviceName': 'CLEANING SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/DUPLEX_HOUSE_DEEP_CLEANING_SERVICES.jpeg', 'serviceDescription': 'Deep cleaning services for duplex houses.'}
        ,{'id': v4uuid(), 'serviceCategory': 'INTERIOR DESIGN', 'serviceTitle': 'WALL DESIGNING SERVICESS', 'serviceName': 'INTERIOR DESIGN SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/WALL_DESIGNING_SERVICESS.jpeg', 'serviceDescription': 'Creative wall designing solutions provided.'}
        ,{'id': v4uuid(), 'serviceCategory': 'INTERIOR DESIGN', 'serviceTitle': 'FOYER AREA DESIGNING SERVICES', 'serviceName': 'INTERIOR DESIGN SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/FOYER_AREA_DESIGNING_SERVICES.jpeg', 'serviceDescription': 'Designing services for foyer areas available.'}
        ,{'id': v4uuid(), 'serviceCategory': 'INTERIOR DESIGN', 'serviceTitle': 'TV UNIT DESIGNING SERVICES', 'serviceName': 'INTERIOR DESIGN SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/TV_UNIT_DESIGNING_SERVICES.jpeg', 'serviceDescription': 'Custom designs for TV units offered.'}
        ,{'id': v4uuid(), 'serviceCategory': 'INTERIOR DESIGN', 'serviceTitle': 'CUPBOARD DESIGNING SERVICES', 'serviceName': 'INTERIOR DESIGN SERVICES', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/subServices/CUPBOARD_DESIGNING_SERVICES.jpeg', 'serviceDescription': 'Innovative cupboard designing solutions provided.'}];

    const [site, setSite] = useState("Home")
    const [updatedList, setUpdatedList] = useState([])
    const [city, setCity] = useState("vishakapatnam")
    const [search, setSearch] = useState("")
    const [burger,setBurger] =useState("closed")
    //active,inActive
    const [searchStatus,setSearchStatus] = useState("inActive")
    const burgerClicked = ()=>{
        setBurger(burger==="closed"?"opened":"closed")
    }
    const cityChanged =(event)=>{
        console.log(event.target.value)
        setCity(event.target.value)
    }
    const changeSite = (name)=>{
        setSite(name)
        burgerClicked()
    }
    const clearSearch = ()=>{
        setSearch("")
        searchChanged()
    }

    var updater =[]
    const searchChanged =(event)=>{
        
        setSearch(event.target.value)
        console.log(event.target.value)
        const searchEvent = event.target.value
        if(searchEvent!==""){
            updater = subServicesList.filter(item=>item.serviceTitle.toLowerCase().includes(searchEvent.toLowerCase()))
        }
        else{
            setUpdatedList([])
        }
        setUpdatedList(updater)
        console.log(updatedList)
        if(updatedList.length>0){
            setSearchStatus("active")
        }
        else{
            setSearchStatus("empty")
        }
        console.log(searchStatus)
    }
    return (
        <div id="navBlog">
        
            <nav className="navContainer">
                <button onClick={()=>burgerClicked()}className='logoImgMobile noButton'>{burger==="opened"?<RxCross2 className='crossButton' />:<RxHamburgerMenu className='crossButton' />}</button>
                <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/LogoFull.jpg" alt="logo" className="logoImgLaptop" />                
            
                <ul className="navSubContainer laptop">
                <Link className='noDecor' to="/"><li onClick={()=>changeSite("home")} className={site==="home"?"highListItem":"listItem"}>Home</li></Link>
                <Link className='noDecor' to="/aboutus"><li onClick={()=>changeSite("about")} className={site==="about"?"highListItem":"listItem"}>About Us</li></Link>
                    <Link className='noDecor' to='/service'><li onClick={()=>changeSite("service")} className={site==="service"?"highListItem":"listItem"}>Services</li></Link>
                    <Link className='noDecor' to="/contacts"><li onClick={()=>changeSite("contact")} className={site==="contact"?"highListItem":"listItem"}>Contact Us</li></Link>
                </ul>
                <div>
                <div className="rowContainer searchBlog">
                    <input className="search-container laptop" type="text" onChange={searchChanged} value={search} placeholder="Search your Service..." />
                    <button type="button" className="noButton laptop"><IoIosSearch /></button>
                    </div>
                </div>
                      
                <select onChange={cityChanged} className="laptop dropdown-select" value={city}>
                        <option className="dropdown-option" value="">Select City</option>
                        <option className="dropdown-option" value="Vishakapatnam">Vishakapatnam</option>
                        <option className="dropdown-option" value="Rajamundry">Rajamundry</option>
                        <option className="dropdown-option" value="Hyderabad">Hyderabad</option>
                        <option className="dropdown-option" value="Vijaywada">Vijaywada</option>
                    </select>

                
                <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/logo.jpg" alt="logo" className="logoImgMobile" />
                
            </nav>
            
            {burger==="opened"?           
            (<ul className='logoImgMobile margin dropListContainer'>
                <li onClick={()=>changeSite("home")} className={site==="home"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to="/">Home</Link></li>
                <li onClick={()=>changeSite("about")} className={site==="about"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to="/aboutus">About Us</Link></li>
                <li onClick={()=>changeSite("service")} className={site==="service"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to='/service'>Services</Link></li>
                <li onClick={()=>changeSite("contact")} className={site==="contact"?"highDropListItem":"listDropItem"}><Link className='hrefIcons' to="/contacts">Contact Us</Link></li>
            </ul>):(<></>)
            }

            {updatedList.length>0?(<ul className='laptop margin searchListContainer'>
                    {                   updatedList.map(item => (
                            <li key={item.id} className="searchDropItem">
                                <Link onClick={()=>clearSearch()} className='linked' to={`/service/subservices/${item.serviceTitle}`}>
                                    <div className='rowContainer searchItems'>
                                        <h3>{item.serviceTitle}</h3>
                                        <img className="searchImages" src={item.serviceImg} alt={item.serviceName} />
                                    </div>
                                </Link>
                            </li>
                    ))}
                </ul>):(<></>)}       
            </div>
    )
}

export default Navbar
