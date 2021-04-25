import React from 'react'
import CartItem from './CartItem'

class Checkout extends React.Component {

   sendOrder(){
      const data = localStorage.getItem("cartData");
      const amount = localStorage.getItem("amount");
      const id = localStorage.getItem("restaurantId");
      const name = document.getElementById("lastname").value + " " + document.getElementById("firstname").value;
      const city = document.getElementById("city").value;
      const street = document.getElementById("street").value;
      const phone = document.getElementById("phone").value;

      const datas = {
          "Timestamp" : "2021.04.25 13: 21",
          "FirstName": "valami",
          "LastName": "valamiii",
          "City": "Budapest",
          "Street:": "fasz utca 1",
          "PhoneNumber": "1234567",
          "PaymentType": "asdasdasdasd",
          "OrderSum": "4333321",
          "OrderStatus": "0",
          "FoodIds":[3,4],
          "RestaurantId": 1,
       }
       const request = new XMLHttpRequest();
       const url = "https://localhost:44329/api/User/CreateOrder";
       request.open("POST", url);
       /*request.onload = () => {
           
       }*/
       request.setRequestHeader("Content-Type", "application/json");
       request.send(JSON.stringify(datas));
      console.log(datas);
   }

   displayCart(){
      return (
         <div>
            ITT lesz a kosár
         </div>
      )
   }

   render(){
      return (
         <div>
            {this.displayCart()}
            whent the magic starts to bleed

            <form className="quick-form">
               <div className="inputs">
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
            </form>
            <button id="order" onClick={() => this.sendOrder()}>Order</button>
         </div>
      )
   }
}

export default Checkout
