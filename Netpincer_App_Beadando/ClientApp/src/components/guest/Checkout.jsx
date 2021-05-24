import React from 'react'
import { Redirect } from 'react-router'

class Checkout extends React.Component {

   constructor(){
      super();
      this.state = {
          redirect: false,
          user: false
      }
      this.sendOrder = this.sendOrder.bind(this);
   }
    componentDidMount() {
        if (localStorage.getItem("userId") !== null) {
            const request = new XMLHttpRequest();
            const url = "https://localhost:44329/api/User/GetUser/" + localStorage.getItem("userId");
            request.open("GET", url);
            request.onload = () => {
                const data = JSON.parse(request.responseText);
                document.getElementById("firstname").value = data.firstName;
                document.getElementById("lastname").value = data.lastName;
                document.getElementById("city").value = data.city;
                document.getElementById("street").value = data.street;
            }
            request.send();
        }
    }
    sendOrder() {

        let userId = localStorage.getItem("userId");
        if (userId === null) {
            userId = 0;
        }
      let date = new Date();
      const amount = localStorage.getItem("amount");
      const id = localStorage.getItem("restaurantId");
      const ids = JSON.parse(localStorage.getItem("foodIds"));
      const firstName = document.getElementById("firstname").value;
      const lastName = document.getElementById("lastname").value;
      const city = document.getElementById("city").value;
      const street = document.getElementById("street").value;
      const payment = document.getElementById("payment").value;
       


      const datas = {
          "Timestamp" : date,
          "FirstName": firstName,
          "LastName": lastName,
          "City": city,
          "Street": street,
          "PaymentType": "Bankkártya",
          "OrderSum": amount,
          "OrderStatus": "0",
          "FoodIds": ids,
          "RestaurantId": id,
          "userId": userId,
          "paymentType": payment
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
        if (localStorage.getItem("userId") === null) {
            this.setState({ user: true });
        } else {
            this.setState({ redirect: true });
        }
            
      
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

       if (this.state.user) {
           return <Redirect to="/" />
       } else {
           if(this.state.redirect) {
           return <Redirect to="/guest" />
            }
       }
           

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
                          Payment type:
                     <select id="payment">
                              <option>Credit card</option>
                              <option>Cash</option>
                     </select>
                      </label>
                      <label>
                          Please choose:
                     <select id=":)">
                              <option>Delivery</option>
                              <option>Takeaway</option>
                          </select>
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
