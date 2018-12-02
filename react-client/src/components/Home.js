import React from 'react'
import {BrowserRouter ,Route ,Switch} from 'react-router-dom'
import About from './About'
import Event from './Event'

const Home=(props)=>{

    return(
        
  <div>
			
			<div className="container-fluid" >
				<div classnName="images">
        {
 props.items.map((item) =>{
   return(<Event item={item}/>)
 
})

        }  
        
				</div>
				
			</div>
   
              </div>
    )
}

export default Home

