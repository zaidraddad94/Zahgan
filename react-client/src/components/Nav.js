import React from 'react'
import zahgan from './zahgan.jpg';

const Nav=()=>{

    return(
      <div>
      <nav className="navbar navbar-expand-sm ">
  <ul className="navbar-nav">
            <li className="active"><a href="/home">Home</a></li>
            
            <li><a href="/about">About</a></li>
            <li><a href="#">Contact us</a></li>
            <img src={zahgan}></img>
            <li><a href="/create">Create</a></li>
            <li><a href="/signin">Sign in</a></li>
           
           
           < li><a href="/signup">Sign up</a></li>
            
          </ul>
       
      </nav>

   </div>

    )
}
export default Nav