import { useState, useEffect } from 'react'
import {v4 as v4uuid} from "uuid"
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

// const backgroundImageStyle = {
//   backgroundSize: 'cover',
//   backgroundRepeat: 'no-repeat',
//   height: "200px",
//   borderRadius: "15px",
//   border: '2px solid rgb(237,237,237)' ,
//   margin: '15px',
// };

const SlickCarousel = () => {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value
    const settings = {
        dots: true,
        infinite: true,
        arrow:true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    const sliderData = [
     {'id': v4uuid(), 'serviceCategory': 'AC', 'serviceTitle': 'AC REPAIR & SERVICES', 'serviceDescription': 'Enjoy convenient AC service and repairs that fit your busy schedule.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/ac.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'ELECTRICAL', 'serviceTitle': 'ELECTRICAL SERVICES', 'serviceDescription': 'Get all-around home maintenance, from wiring to fixture installations.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/electric.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'PLUMBING', 'serviceTitle': 'PLUMBING SERVICES', 'serviceDescription': 'Our plumbing solutions cover everything from installation to upkeep.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/plumbing.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'CARPENTRY WORK', 'serviceTitle': 'CARPENTRY WORK SERVICES', 'serviceDescription': 'Maintain high standards with proactive Carpentry Services.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/carpentry.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'RAILING WORK', 'serviceTitle': 'RAILING WORK SERVICES', 'serviceDescription': 'Ensure safety and style with our railing installations.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/railing.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'SOFA CLEANING', 'serviceTitle': 'SOFA CLEANING', 'serviceDescription': 'Revitalize your sofas with our professional cleaning services.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/sofa.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'FLOORING WORK', 'serviceTitle': 'FLOORING WORK SERVICES', 'serviceDescription': 'Find Flooring Contractors in India and get in touch easily.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/flooring.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'CELLING WORK', 'serviceTitle': 'CELLING WORK SERVICES', 'serviceDescription': 'Elevate your interiors with Gypsum Ceiling Work for any room.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/celling.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'CLEANING', 'serviceTitle': 'CLEANING SERVICES', 'serviceDescription': 'Keep your home spotless inside and out with our comprehensive cleaning services.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/cleaning.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'INTERIOR DESIGN', 'serviceTitle': 'INTERIOR DESIGN SERVICES', 'serviceDescription': 'Let our skilled designers transform your space into a personalized masterpiece.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/interior.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'LAUNDRY', 'serviceTitle': 'LAUNDRY SERVICES', 'serviceDescription': 'Experience the best in online laundry service with VK Cleanz.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/laundry.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'WINDOW CLEANING', 'serviceTitle': 'WINDOW CLEANING', 'serviceDescription': "Enhance your building's appeal with our expert window cleaning.", 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/window.jpg'}
    ,{'id': v4uuid(), 'serviceCategory': 'PEST CONTROL', 'serviceTitle': 'PEST CONTROL', 'serviceDescription': 'Tailored pest control solutions to suit your schedule and requirements.', 'serviceImg': 'https://raw.githubusercontent.com/sujith133/maxCleanz/main/allServices/pest.jpg'}]
    

    useEffect(() => {
      const updateSlidesToShow = () => {
        const containerWidth = document.querySelector('.slick-slider').clientWidth;
        if(containerWidth<=559){
            setSlidesToShow(1);
        }
        else if(containerWidth<=1184){
            setSlidesToShow(2);
        }
        else{
            setSlidesToShow(3);
        }
        
      };
  
      // Call the function initially and add a resize event listener to update the slidesToShow value when the window is resized
      updateSlidesToShow();
      window.addEventListener('resize', updateSlidesToShow);
  
      // Remove the resize event listener when the component is unmounted
      return () => {
        window.removeEventListener('resize', updateSlidesToShow);
      };
    }, []);

  return (      
    <Slider className='slideContainer' {...settings}>
    {sliderData.map(each => (
      <div className='sliderItemer' key={each.id} >
        <img className='sliderImage' src={each.serviceImg} alt={each.serviceTitle} />
        <h3>{each.serviceTitle}</h3>
        <p>{each.serviceDescription}</p>
        <Link className='linked' to={`/service/${each.serviceCategory}`}><button type="button" className='exploreButton'>Explore</button></Link>
        
      </div>
    ))}
  </Slider>
    
  );
};

export default SlickCarousel;
