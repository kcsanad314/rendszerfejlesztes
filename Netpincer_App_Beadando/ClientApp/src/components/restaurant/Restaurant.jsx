import React from 'react'
import './Restaurant.css'
import RestRegistration from './RestRegistration'
import Menu from './Menu'
import ListFoods from "./ListFoods"




class Restaurant extends React.Component {

   constructor(){
      super();
      this.state = {
          id: 0,
          foods: []
      }
   }


    /*
     * Minden kategórián belülről kell kikérni a kajákat
     * 
    */
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
       const request = new XMLHttpRequest();
       const url = "https://localhost:44329/api/Owner/GetRestaurantFoodList/1";
       request.open("GET", url);
       //request.setRequestHeader("Content-Type", "application/json");
       request.onload = () => {
           console.log(request.responseText);
           const type = JSON.parse(request.responseText);
           var food_cat = [];
           console.log(type);
           console.log(type[0].foodCategories);
           for (let category of type[0].foodCategories) {
               console.log(category.name);
               food_cat.push(category);
           }
           this.setState({
               foods: food_cat
           })
       }
       request.send();
    }

    rendering() {
      const food_arr = [];
      let i = 0;
      for (let food of this.state.foods) {
          food_arr.push(<ListFoods key={i} category={food}/>);
          i++;
        }

      if(this.state.id === 1)
         return (<RestRegistration />)
      if(this.state.id === 2)
         return (<Menu />)
       if (this.state.id === 3)
         return (food_arr)
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
