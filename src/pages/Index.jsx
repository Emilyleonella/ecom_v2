import React from "react"
import Slideshow from "../components/Slider/Slideshow"

const Homepage = () => {
  return (
    <>
    <p className="quote">
      "For what good is freedom of expression if you lack the means to express
      yourself?"</p>
    <p className="by">Roy Peter Clark</p>
   
      <div className="slider">
      <Slideshow/>
      </div>
  <section className='container'>
    <div className="para"></div>
    <p className='aboutus'>
      Welcome to our website! Here at Bee Unique we love to be eco-freindly. This is why we print all of our planners,
      journals, and bullet journals on 100% recycled paper. We believe that organization and self expression are very important. Our mission is to provide materials needed for our customers to start their journey in planning and simply expression by writing or drawing. We also want to bring awareness to Save The Bees Organization. To learn more click <a href="https://savethebees.com/" target="_blank">Here.</a> 
    </p>
  </section>
    </>
  )
}

export default Homepage