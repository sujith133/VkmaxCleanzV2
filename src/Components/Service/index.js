import { Link } from 'react-router-dom';
import { useState } from 'react'
import {v4 as v4uuid} from "uuid"

import './index.css'

const Service =()=>{
 
const [minani,setMinani]=useState([
{'id': v4uuid(), 'serviceCategory': 'KEEPING', 'serviceTitle': 'HOUSE KEEPING SERVICES', 'serviceDescription': 'Maintaining pristine environments to nurture productivity and well-being.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/housekeeping.jpeg'}        
,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'CLEANING SERVICES', 'serviceDescription': 'Experience thorough interior and exterior house cleaning services.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/cleaning.jpg'},
{'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'HOME APPLIANCES REPAIR & SERVICES', 'serviceDescription': 'Experience top-tier AC service and repair solutions tailored to your schedule.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/ac.jpg'},
{'id': v4uuid(), 'serviceCategory': 'ELECTRICAL', 'serviceTitle': 'ELECTRICAL SERVICES', 'serviceDescription': 'From house wiring to fixing tube lights and fans, we handle all general repairs and installations.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/electric.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'PLUMBING', 'serviceTitle': 'PLUMBING SERVICES', 'serviceDescription': 'Our plumbing services encompass the installation and maintenance of building pipe systems.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/plumbing.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'CARPENTRY WORK', 'serviceTitle': 'CARPENTRY WORK SERVICES', 'serviceDescription': 'Our Carpentry Services focus on proactive maintenance to uphold quality standards.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/carpentry.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'RAILING WORK', 'serviceTitle': 'RAILING WORK SERVICES', 'serviceDescription': 'Railings serve as safety features for stairs, balconies, decks, and other areas.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/railing.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'SOFA CLEANING', 'serviceTitle': 'SOFA CLEANING', 'serviceDescription': "Our sofa cleaning services ensure the restoration of your furniture's cleanliness and freshness.", 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/sofa.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'FLOORING WORK', 'serviceTitle': 'FLOORING WORK SERVICES', 'serviceDescription': 'Connect with Flooring Services and Contractors in India; find their contact information here.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/flooring.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'CEILING WORK', 'serviceTitle': 'CEILING WORK SERVICES', 'serviceDescription': 'Enhance your spaces with Gypsum Ceiling Work, available for bedrooms, halls, and kitchens.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/celling.jpg'}

,{'id': v4uuid(), 'serviceCategory': 'INTERIOR DESIGN', 'serviceTitle': 'INTERIOR DESIGN SERVICES', 'serviceDescription': 'Our talented designers craft personalized spaces, weaving your preferences and lifestyle into captivating realities.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/interior.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'LAUNDRY', 'serviceTitle': 'LAUNDRY SERVICES', 'serviceDescription': 'Discover the premier online laundry service at vk max, offering affordable garment care solutions.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/laundry.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'WINDOW CLEANING', 'serviceTitle': 'WINDOW CLEANING', 'serviceDescription': "Elevate your building's aesthetics with professional window cleaning services for architectural exteriors.", 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/window.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'PEST CONTROL', 'serviceTitle': 'PEST CONTROL', 'serviceDescription': 'Access top-quality pest control solutions tailored to your schedule and needs.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/pest.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'Salon', 'serviceTitle': 'Car Wash', 'serviceDescription': 'Bringing good look to your Car.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/beautiful-car-washing-service.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'home', 'serviceTitle': 'Home Painting', 'serviceDescription': 'Painting homes, crafting dreams – one stroke at a time.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/homePaint.jpeg'}
,{'id': v4uuid(), 'serviceCategory': 'CCTV', 'serviceTitle': 'CCTV SERVICES', 'serviceDescription': 'Discover the premier online cctv service at vk max, offering affordable garment care solutions.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/cctv.jpg'}
,{'id': v4uuid(), 'serviceCategory': 'MOTOR', 'serviceTitle': 'MOTOR SERVICES', 'serviceDescription': 'Discover the premier online motor service at vk max, offering affordable garment care solutions.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/motor.jpg'}])

    const changeDisplay = (name) => {
        setMinani(prevMinani => prevMinani.map(eachItem => {
            if (name === eachItem.name) {
                return {
                    ...eachItem,
                    display: !eachItem.display
                };
            } else {
                return eachItem;
            }
        }));
    };

    return(
        <div className='serviceContainer margin'>
            <h1 className='textCenter titleHeading'>Our Services</h1>
                    <div className="serviceSub">
                    {minani.map((item) => (
                        <div onClick={()=>changeDisplay(item.serviceCategory)} key={item.id} className="serviceSubContainer card">
                            {
                                <Link className='linked' to={`/service/${item.serviceCategory}`}><div className='card-front'>
                                <h1 className='cardHeading'>{item.serviceTitle}</h1>
                                <p>{item.serviceDescription}</p>
                                <img className="serviceImages" src={item.serviceImg} alt={item.serviceTitle} />
                                </div></Link>                                
                            }

                        </div>
                    ))}
                    </div> 
                
                
            
        </div>
    )
}
export default Service