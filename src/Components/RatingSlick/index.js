import { useState, useEffect } from 'react'

import React from 'react';
import Slider from 'react-slick';
import { BiSolidStar, BiSolidStarHalf } from 'react-icons/bi';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const RatingSlick = () => {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value

    const settings = {
        dots: true,
        infinite: true,
        arrow:true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    };
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
        <Slider {...settings} className="slideContainer wrapper justifier positioning">
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/target%20(1).png" alt="mission" />
                <h3 className="about-title">Our mission</h3>
                <p className="about-description">VK Max Cleanz aims to extend its reach across the country, striving to become the premier choice for residential and commercial facility management services.</p>
                <div className='starmargin rowContainer ratingBox'>
                    <div className='starRating'>
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStarHalf className='stars' />
                    </div>
                </div>
            </div>
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/leadership.png" alt="vision" />
                <h3 className="about-title">Our vision</h3>
                <p className="about-description">Our vision is to emerge as the leading provider of facility management solutions, dedicated to making a positive impact on the lives of our customers by enhancing the quality of their living and working environments.</p>
                <div className='starmargin rowContainer ratingBox'>
                    <div className='starRating'>
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStarHalf className='stars' />
                    </div>
                </div>
            </div>
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/customer.png" alt="values" />
                <h3 className="about-title">Our core values</h3>
                <p className="about-description">At VK Max Cleanz, we uphold integrity, excellence, and customer-centricity as our core values, guiding every aspect of our operations to ensure unparalleled service delivery and customer satisfaction.</p>
                <div className='starmargin rowContainer ratingBox'>
                    <div className='starRating'>
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStarHalf className='stars' />
                    </div>
                </div>
            </div>
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/customer.png" alt="values" />
                <h3 className="about-title">Our core values</h3>
                <p className="about-description">At VK Max Cleanz, we uphold integrity, excellence, and customer-centricity as our core values, guiding every aspect of our operations to ensure unparalleled service delivery and customer satisfaction.</p>
                <div className='starmargin rowContainer ratingBox'>
                    <div className='starRating'>
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStarHalf className='stars' />
                    </div>
                </div>
            </div>
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/customer.png" alt="values" />
                <h3 className="about-title">Our core values</h3>
                <p className="about-description">At VK Max Cleanz, we uphold integrity, excellence, and customer-centricity as our core values, guiding every aspect of our operations to ensure unparalleled service delivery and customer satisfaction.</p>
                <div className='starmargin rowContainer ratingBox'>
                    <div className='starRating'>
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStarHalf className='stars' />
                    </div>
                </div>
            </div>
            <div className='sliderItemer aboutmission'>
                <img className='sliderImage' src="https://raw.githubusercontent.com/sujith133/maxCleanz/main/aboutUs/customer.png" alt="values" />
                <h3 className="about-title">Our core values</h3>
                <p className="about-description">At VK Max Cleanz, we uphold integrity, excellence, and customer-centricity as our core values, guiding every aspect of our operations to ensure unparalleled service delivery and customer satisfaction.</p>
                <div className='starmargin rowContainer ratingBox'>
                    <div className='starRating'>
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStar className='stars' />
                        <BiSolidStarHalf className='stars' />
                    </div>
                </div>
            </div>
        </Slider>
    );
};

export default RatingSlick;
