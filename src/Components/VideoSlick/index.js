import { useState, useEffect } from 'react'
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const VideoSlick = () => {
    const [slidesToShow, setSlidesToShow] = useState(3); // Default value
    const settings = {
        dots: false,
        infinite: true,
        arrow:true,
        speed: 500,
        slidesToShow: slidesToShow,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
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
            <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/MqfOo1sRi2o"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/0x_oznFXk0c"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/ULmacunwcsU"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/9p5WKu6wjhk"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/irvw4_562BM"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
                <iframe
                    width="560"
                    height="315"
                    src="https://www.youtube.com/embed/NSfLCfKDdEQ"
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            
        </Slider>
    );
};

export default VideoSlick;
