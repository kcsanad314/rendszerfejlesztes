import React from 'react'
import "./Courier.css"
import WorkingHours from './WorkingHours'

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
  }

   render(){
      return (
         <div>
            <div className="sidebar">
               <div id="1" className="sidebarButton">Working <br/>hours</div>
               <div id="2" className="sidebarButton"></div>
               <div id="3" className="sidebarButton"></div>
               <div id="4" className="sidebarButton"></div>
            </div>
            <div className="options">
               {this.rendering()}
            </div>
         </div>
      )
   }
}

export default Courier
