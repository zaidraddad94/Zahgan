import React from 'react';
import { Fade } from 'react-slideshow-image';
 
const fadeImages = [
  'https://speckyboy.com/wp-content/uploads/2011/09/dualscreenwall9.jpg',
  'https://i.pinimg.com/originals/95/ee/86/95ee8696f8ed1abb3767928c4d0daf65.jpg',
  'http://desktop-backgrounds-org.s3.amazonaws.com/high-quality-high-definition.jpg'
];
 
const fadeProperties = {
  duration: 3000,
  transitionDuration: 500,
  infinite: true,
  indicators: true,
  height:20
}
 
const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[0]} />
        </div>
       
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[1]} />
        </div>
       
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={fadeImages[2]} />
        </div>
       
      </div>
    </Fade>
  )
}
export default Slideshow