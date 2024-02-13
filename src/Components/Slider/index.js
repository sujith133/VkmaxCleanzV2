import { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css'

// Define the settings for the slider


const SlickCarousel = () => {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value
    const settings = {
        dots: false,
        infinite: true,
        arrow:false,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      };
    
    

    useEffect(() => {
      // Function to update the number of slides to show based on the container width
      const updateSlidesToShow = () => {
        // Get the width of the container
        const containerWidth = document.querySelector('.slick-slider').clientWidth;
        console.log(containerWidth)
        // Calculate the number of slides to show based on the container width
        if(containerWidth<=767){
            setSlidesToShow(1);
        }
        else if(containerWidth<=1024){
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
        <div className='sliderItem'>
            <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1681110360042-dcfde0.jpg" alt="1" className='sliderImage' />
        </div>
        <div className='sliderItem'>
            <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1701759875987-8b654d.jpg" alt="2" className='sliderImage' />
        </div>
        <div className='sliderItem'>
            <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1678454437383-aa4984.jpg" alt="3" className='sliderImage' />
        </div>
        <div className='sliderItem'>
            <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1699859892789-978a14.jpg" alt="4" className='sliderImage' />
        </div>
        <div className='sliderItem'>
            <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1678450687690-81f922.jpg" alt="5" className='sliderImage' />
        </div>
        <div className='sliderItem'>
            <img src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/cottonImages/1705400884989-a73086.jpg" alt="6" className='sliderImage' />
        </div>
      </Slider>
    
  );
};

export default SlickCarousel;
