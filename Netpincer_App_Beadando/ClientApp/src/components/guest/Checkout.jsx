import React from 'react'
import { Redirect } from 'react-router'

class Checkout extends React.Component {

   constructor(){
      super();
      this.state = {
         redirect: false
      }
      this.sendOrder = this.sendOrder.bind(this);
   }

   sendOrder(){
      let date = new Date();
      const amount = localStorage.getItem("amount");
      const id = localStorage.getItem("restaurantId");
      const ids = JSON.parse(localStorage.getItem("foodIds"));
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const city = document.getElementById("city").value;
      const street = document.getElementById("street").value;
      const phone = document.getElementById("phone").value;


      const datas = {
          "Timestamp" : date,
          "FirstName": firstName,
          "LastName": lastName,
          "City": city,
          "Street:": street,
          "PhoneNumber": phone,
          "PaymentType": "Bankkártya",
          "OrderSum": amount,
          "OrderStatus": "0",
          "FoodIds": ids,
          "RestaurantId": id,
       }
       const request = new XMLHttpRequest();
       const url = "https://localhost:44329/api/User/CreateOrder";
       request.open("POST", url);
       /*request.onload = () => {
       }*/
       request.setRequestHeader("Content-Type", "application/json");
       request.send(JSON.stringify(datas));
      // console.log(ids);
      alert('Thank you for your order!');
      this.setState({redirect: true});
   }

   displayCartItems(){
      const items = [];
      const names = JSON.parse(localStorage.getItem("foodNames"));
      const prices = JSON.parse(localStorage.getItem("foodPrice"));

      for(let i = 0; i < names.length; i++){
         items.push(<DisplayCart foodName={names[i]} foodPrice={prices[i]} />);
      }
      return items;
   }

   render(){
      // {this.displayCartItems()}
      if(this.state.redirect)
         return <Redirect to="/" />
      return (
         <div>
            <form className="quick-form">
               <div className="inputs qf-inputs">
                  <label>
                     First name:
                     <input type="text" id="firstname"/>
                  </label>
                  <label>
                     Last name:
                     <input type="text" id="lastname"/>
                  </label>
                  <label>
                     City:
                     <input type="text" id="city"/>
                  </label>
                  <label>
                     Street, house number:
                     <input type="text" id="street"/>
                  </label>
                  <label>
                     Phone:
                     <input type="text" id="phone"/>
                  </label>
               </div>
               <button id="order" onClick={() => this.sendOrder()}>Order</button>
            </form>
         </div>
      )
   }
}

function DisplayCart(props){
   return (
      <div className="item">
         <div className="item-name">{props.foodName}</div>
         <div className="item-piece"></div>
         <div className="price">{props.foodPrice} Ft</div>
      </div>
   )
}


export default Checkout
