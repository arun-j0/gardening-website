import React from 'react';
import Slider from 'react-slick'; 
import 'slick-carousel/slick/slick.css'; 
import 'slick-carousel/slick/slick-theme.css'; 
import work1 from '../assets/works/work1.jpg';
import work2 from '../assets/works/work2.jpg';
import work3 from '../assets/works/work3.jpg';
import work5 from '../assets/works/work5.jpg';
import work6 from '../assets/works/work6.jpg';


function OurWorksSection() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 1, 
    centerMode: true, 
    centerPadding: '50px', 
    autoplay: true,
    autoplaySpeed: 2000,
    fade: true,
    arrows: true, 
    prevArrow: (
      <div className="absolute z-50 slick-prev slick-arrow left-10 md:left-5 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
      </div>
    ),
    nextArrow: (
      <div className="absolute z-50 slick-prev slick-arrow right-10 md:right-20 hover:opacity-75 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
      </div>
    ),
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          dots: true, 
        },
      },
    ],
  };

  return (
    <section className="py-12 border-4 border-white rounded-xl bg-gradient-to-r from-green-400 via-green-500 to-green-600" id='works'>
      <div className="container px-5 mx-auto">
        <h2 className="mb-8 text-4xl font-bold text-center text-white">Our Works</h2>
        <div className="max-w-screen-lg md:ml-60" > 
          <Slider {...sliderSettings}>
            <div>
              <img src={work1} alt="Work 1" className="object-fill rounded-lg" /> 
            </div>
            <div>
              <img src={work2} alt="Work 2" className="object-fill rounded-lg" /> 
            </div>
            <div>
              <img src={work3} alt="Work 3" className="object-fill rounded-lg" /> 
            </div>
            
            <div>
              <img src={work5} alt="Work 3" className="object-fill rounded-lg" /> 
            </div>
            <div>
              <img src={work6} alt="Work 3" className="object-fill rounded-lg" /> 
            </div>
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default OurWorksSection;
