import React from 'react'
import './Restaurant.css'
import RestRegistration from './RestRegistration'
import Menu from './Menu'
import ListFoods from "./ListFoods"

class Restaurant extends React.Component {

   constructor(){
      super();
      this.state = {
         id: 0
      }
   }

   componentDidMount(){
      const buttons = document.getElementsByClassName("sidebarButton");
      // container[0].classList.add("container-active");
      for(let i = 0; i < buttons.length; i++){
         buttons[i].addEventListener('click', () => {
            this.setState({
               id: i+1
            });
            // container[i].classList.add("container-active");
            // for(let j = 0; j < container.length; j++){
            //    if(i !== j)
            //       container[j].classList.remove("container-active");
            // }
            // console.log(this.state.avatar)
         });
      }
   }

   rendering(){
      if(this.state.id === 1)
         return (<RestRegistration />)
      if(this.state.id === 2)
         return (<Menu />)
      if(this.state.id === 3)
         return (<ListFoods />)
   }

   render(){
      return (
         <div className="restaurant">
            <div className="sidebar">
               <div id="1" className="sidebarButton">Restaurant <br/>registration</div>
               <div id="2" className="sidebarButton">Menu</div>
               <div id="3" className="sidebarButton">List Foods</div>
            </div>
            <div className="options">
               {this.rendering()}
            </div>
         </div>
      )
   }
}

export default Restaurant
