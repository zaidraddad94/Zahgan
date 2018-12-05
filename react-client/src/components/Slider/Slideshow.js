import React from 'react';
import { Fade } from 'react-slideshow-image';
import $ from 'jquery';

 
const fadeProperties = {
  duration: 1000,
  transitionDuration: 500,
  infinite: false,
  indicators: true,
  height:20
}
var dd = async function getpics (){
 
  var x = await []
  $.ajax({
    url: '/create',
    success:  (data) => {
      console.log("zaid data 1" ,data)
      for (var i = 0 ; i<data.length ; i++ ){
        console.log("zaid data 2" ,data[i].url)
         x.push(data[i].url)
      
      }
    },
    error: (err) => {
      console.log('err', err);
    }
  });
 

//   var xx = async function(){
//   for (var ii = 0 ; ii< x.length ; ii++){
//    await  fadeImages.push(x[ii])
//   }
// }
//  xx()
 return x
}

dd()
 
console.log('aaaaaaaaaaa', dd)
const Slideshow = () => {
  return (
    <Fade {...fadeProperties}>
      <div className="each-fade">
        <div className="image-container">
          <img src={dd[0]} />
        </div>
       
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={dd[1]} />
        </div>
       
      </div>
      <div className="each-fade">
        <div className="image-container">
          <img src={dd[2]} />
        </div>
       
      </div>
    </Fade>
  )
}
export default Slideshow