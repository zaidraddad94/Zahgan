import React from 'react'
import zahgan from './zahgan.jpg';
import $ from 'jquery';

const ToEvents=()=>{
    $("#clickEvent").click(function() {
        $('html, body').animate({
            scrollTop: $("#events").offset().top
        }, 2000);
    });
}

const ToAbout=()=>{
    $("#clickAbout").click(function() {
        $('html, body').animate({
            scrollTop: $("#about").offset().top
        }, 2000);
    });
}


const Nav=()=>{

    return(
      <div>
      <nav className="navbar navbar-expand-sm ">
  <ul className="navbar-nav">
            <li className="active"><a href="/homeClass">Home</a></li>
            
            <li><a href="#" onClick={ToAbout} id="clickAbout">About</a></li>
            <li><a href="#">Contact us</a></li>
            <img src={zahgan}></img>
            <li><a href="/SignInCreator">Create</a></li>
            <li><a href="/signin">Sign in</a></li>
            <li><a href="javascript:void(0);" onClick={ToEvents} id="clickEvent">Events</a></li>
           
           < li><a href="/signup">Sign up</a></li>
            
          </ul>
       
      </nav>

   </div>

    )
}
export default Nav