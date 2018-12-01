import React from 'react'

const Home=(props)=>{
 const content = props.items.map((item) =>
    <div className="images">
		<a href="#" data-toggle="modal" data-target="#eventClicked">	<img src={item.Name}></img></a>
      <div className="content">{item.HomeWork}</div>
      
    </div>


  );
    return(
        
  <div>
			
			<div className="container-fluid" >
				<div>
          
        {content}
        
				</div>
				
			</div>
     <div className="modal" id="eventClicked">
     <div className="modal-dialog">
       <div className="modal-content">
       
        
         <div className="modal-header">
           <h4 className="modal-title">Event Name</h4>
           <button type="button" className="close" data-dismiss="modal">&times;</button>
         </div>
         
         
         <div className="modal-body">
       
         </div>
         
        
         <div className="modal-footer">
           <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
         </div>
         
       </div>
     </div></div>
              </div>
    )
}

export default Home

