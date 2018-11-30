import React from 'react'

const Nav=()=>{

    return(
      <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <ul className="navbar-nav">
            <li className="active"><a href="/home">Home</a></li>
            <li><a href="/about">about</a></li>
            <li><a href="#" data-toggle="modal" data-target="#myModal">Page 2</a></li>
            <li><a href="#">Page 3</a></li>
          </ul>
       
      </nav>

       <div className="modal" id="myModal">
       <div className="modal-dialog">
         <div className="modal-content">
         
          
           <div className="modal-header">
             <h4 className="modal-title">ashraf test</h4>
             <button type="button" className="close" data-dismiss="modal">&times;</button>
           </div>
           
           
           <div className="modal-body">
         <input type='text'></input>
           </div>
           
          
           <div className="modal-footer">
             <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
           </div>
           
         </div>
       </div>
                </div>
                </div>

    )
}
export default Nav