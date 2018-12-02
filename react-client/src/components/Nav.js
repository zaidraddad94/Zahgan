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
            <li><a href="/create">create</a></li>
          </ul>
       
      </nav>

   </div>

    )
}
export default Nav