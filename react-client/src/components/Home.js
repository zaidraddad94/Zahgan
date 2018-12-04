import React from 'react'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import About from './About'

import EventClass from './EventClass'
import Create from './create'
import Slideshow from './Slider/Slideshow';

const Home=(props)=>{

    return(
       
  <div>
			 <Slideshow />
			<div className="container-fluid" >
				<div classnName="images">
        {
 props.items.map((item) =>{
   return(<div>
    <EventClass item={item}/>
    </div>)
 
})

        }  
        
				</div>
				
			</div>
   
              </div>
    )
}


export default Home

