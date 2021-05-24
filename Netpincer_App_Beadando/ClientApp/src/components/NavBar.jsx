import React from 'react'
import {Link} from 'react-router-dom'
import { Redirect } from 'react-router'

class NavBar extends React.Component {

   constructor(){
      super();
      this.state = {
         redirect: false
      }
      this.orderButton = this.orderButton.bind(this);
   }

   orderButton(){
      this.setState({
         redirect: true
      });
   }

   render(){
      if(this.state.redirect)
         return <Redirect to='order' />

      return (
         <nav className="nav-bar">
            <div className="quick-order" onClick={this.orderButton}>Order without login</div>
            <ul className="links">
               <Link to="/">
                  <li className="log-out">Log out</li>
               </Link>
            </ul>
         </nav>
      )
   }
}

export default NavBar
