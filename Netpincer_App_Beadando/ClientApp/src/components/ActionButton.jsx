import React from 'react'
import {Link} from 'react-router-dom'

class ActionButton extends React.Component {

   render(){
      return (
         <Link to={this.props.url}>
            <button id={this.props.id} className="action-buttons">
               {this.props.name}
            </button>
         </Link>
      )
   }
}

export default ActionButton
