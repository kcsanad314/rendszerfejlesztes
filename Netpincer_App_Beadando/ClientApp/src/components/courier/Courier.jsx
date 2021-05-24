import React from 'react'
import "./Courier.css"
import WorkingHours from './WorkingHours'
import ListOrders from './ListOrders'

class Courier extends React.Component {

   constructor(){
      super();
      this.state = {
         id: 0
      }
   }

   componentDidMount(){
      const buttons = document.getElementsByClassName("sidebarButton");
      for(let i = 0; i < buttons.length; i++){
         buttons[i].addEventListener('click', () => {
            this.setState({ id: i+1 });
         });
      }
   }

   rendering() {
     if(this.state.id === 1)
        return (<WorkingHours />)
     if(this.state.id === 2)
        return (<ListOrders />)
  }

   render(){
      return (
         <div>
            <div className="sidebar">
               <div id="1" className="sidebarButton">Working <br/>hours</div>
               <div id="2" className="sidebarButton">Orders</div>
            </div>
            <div className="options">
               {this.rendering()}
            </div>
         </div>
      )
   }
}

export default Courier
