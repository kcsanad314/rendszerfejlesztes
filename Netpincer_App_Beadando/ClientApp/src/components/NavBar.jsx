import React from 'react'
import {Link} from 'react-router-dom'

class NavBar extends React.Component {

   render(){
      return (
         <nav className="nav-bar">
            <ul className="links">
               <Link to="/">
                  <li>Home</li>
               </Link>
               <Link to="/restaurant">
                  <li>Restaurant</li>
               </Link>
               <Link to="/guest">
                  <li>Guest</li>
               </Link>
               <Link to="/courier">
                  <li>Courier</li>
               </Link>
            </ul>
         </nav>
      )
   }
}

export default NavBar
