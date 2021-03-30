import React from 'react'
import './Guest.css'

class Guest extends React.Component {

   render(){
      return (
         <div className="guest">
            <button>List restaurants</button>
            <div className="list">
            </div>
         </div>
      )
   }
}

export default Guest
