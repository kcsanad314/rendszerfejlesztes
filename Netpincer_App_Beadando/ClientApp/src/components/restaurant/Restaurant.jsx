import React from 'react'
import './Restaurant.css'
import RestRegistration from './RestRegistration'
import Menu from './Menu'
import ListFoods from './ListFoods'
import ManageOrders from './ManageOrders'
import OwnerListFoods from './OwnerListFoods'

class Restaurant extends React.Component {

   constructor(){
      super();
      this.state = {
          id: 0,
          restaurants: jsonFoods
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

       
       const request2 = new XMLHttpRequest();
       const url2 = "https://localhost:44329/api/Owner/GetRestaurantByUserId/" + localStorage.getItem("userId");
       request2.open("GET", url2);
       request2.onload = () => {
           const data = JSON.parse(request2.responseText);
           localStorage.setItem("restId", data);
       }
       request2.send();
       
      /*
       const request = new XMLHttpRequest();
       const url = "https://localhost:44329/api/Owner/GetRestaurantFoodList/1";
       request.open("GET", url);
       request.onload = () => {
           const type = JSON.parse(request.responseText);
           const food_cat = [];
           for (let category of type[0].foodCategories) {
               food_cat.push(category);
           }
           this.setState({
               foods: food_cat
           })
       }
       request.send();
       */
    }

    rendering() {
      const foods = [];
      const catNames = [];
      for(let i = 0; i < this.state.restaurants.length; i++) {
          foods.push(<ListFoods restaurant={1} id={i} category={this.state.restaurants[i].foodCategories}/>);
          for(let cat of this.state.restaurants[i].foodCategories)
             catNames.push(cat.name);
        }

      if(this.state.id === 1)
         return (<RestRegistration />)
      if(this.state.id === 2)
         return (<Menu categories={catNames} />)
        if (this.state.id === 3)
            return (<OwnerListFoods />)
      if(this.state.id === 4)
         return (<ManageOrders />)
   }

   render(){
      return (
         <div className="restaurant">
            <div className="sidebar">
               <div id="1" className="sidebarButton">Restaurant <br/>registration</div>
               <div id="2" className="sidebarButton">Menu</div>
               <div id="3" className="sidebarButton">List Foods</div>
               <div id="4" className="sidebarButton">Manage<br/> Orders</div>
            </div>
            <div className="options">
               {this.rendering()}
            </div>
         </div>
      )
   }
}

export default Restaurant

const jsonFoods = [
    {
        "id": 1,
        "name": "",
        "city": "",
        "street": "",
        "houseNumber": "",
        "description": "",
        "foodCategories": [
            {
                "id": 1,
                "name": "",
                "restaurantId": 1,
                "foods": [
                    {
                        "id": 1,
                        "name": "",
                        "price": "10",
                        "allergenes": "",
                        "foodId": 1
                    },
                    {
                        "id": 2,
                        "name": "",
                        "price": 0,
                        "allergenes": "",
                        "foodId": 1
                    }
                ]
            }
         ]
   }
];
