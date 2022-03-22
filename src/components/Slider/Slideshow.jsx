import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import "./slide.css"

const imgStyle= {
  height: "400px",
  width: "600px"
}

const Slideshow = () => {
  return (
    <div>
      <Carousel className='main-slide'> 
                <div>
                    <img style={imgStyle} src="images/Slide1.jpeg"/>
                    
                </div>
                <div>
                    <img style={imgStyle} src="images/Slide2.webp" />
                    
                </div>
                <div>
                    <img style={imgStyle} className='slider-img' src="images/Slide3.jpeg" />
                    
                </div>
            </Carousel>
    </div>
  )
}

export default Slideshow