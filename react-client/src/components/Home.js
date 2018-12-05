import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import About from './About'
import Vision from './Vision'
import eventclasscreate from './Eventclasscreate'

import EventClass from './EventClass'
import Create from './create'
import Slideshow from './Slider/Slideshow';
import Vision from './Vision';
const Home=(props)=>{

    return(
       
  <div>
			 <Slideshow />
       <Vision/>
       
			<div className="container-fluid" >
			
      	<div classsName="images">
        
        {
 props.items.map((item) =>{
   return(<div >
    <EventClass item={item}/>

    
    </div>)
 
})

        }  
            <section id="what-we-do">
                <div class="container-fluid">
                    <h2 class="section-title mb-2 h1">What we do</h2>
                    <p class="text-center text-muted h5">Having and managing a correct marketing strategy is crucial in a fast moving market.</p>
       </div>
       </section>
				</div>
				
			</div>
   
              </div>
    )
}


export default Home

