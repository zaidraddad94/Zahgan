import React from 'react'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import About from './About'
import Event from './Event'
import EventClass from './EventClass'


const Home=(props)=>{

    return(
        
  <div>
			
			<div className="container-fluid" >
				<div classnName="images">
        {
 props.items.map((item) =>{
   return(<EventClass item={item}/>)
 
})

        }  
        
				</div>
				
			</div>
   
              </div>
    )
}


export default Home

