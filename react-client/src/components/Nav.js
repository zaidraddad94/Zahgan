import React from 'react'
import {Link} from 'react-router-dom'

const Nav=()=>{

    return(
      <div>
      <nav className="navbar navbar-expand-sm bg-light navbar-light">
  <ul className="navbar-nav">
            <li className="active"><Link to="/home">Home</Link>></li>
            <li><Link to="/about">about</Link>></li>
            <li><Link to="#" data-toggle="modal" data-target="#myModal">Page 2</Link>></li>
            <li><Link to="#">Page 3</Link></li>
            <li><Link to="/create">create</Link>></li>
          </ul>
       
      </nav>

   </div>

    )
}
export default Nav