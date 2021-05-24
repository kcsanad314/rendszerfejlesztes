import React from 'react'

class ManageOrders extends React.Component {

   constructor(){
      super();
      this.state = {
          orders: {}
      }
   }

    componentDidMount() {
        const request = new XMLHttpRequest();
        let url = "https://localhost:44329/api/Owner/GetRestaurantOrderList/" + localStorage.getItem("restId");

        request.open("GET", url);
        request.onload = () => {
            // console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            let order_arr = [];
            for (let order of data)
            {
                order_arr.push(order);
                //console.log(order);
            }
            // console.log(order_arr);
            this.setState({ orders: order_arr });
        }
        request.send();
   }

   render(){
      const orders = [];
       for (let i = 0; i < this.state.orders.length; i++) {
           orders.push(<Order key={i} id={this.state.orders[i].id} data={this.state.orders[i]} />);
      }
      return (
         <div className="orders">
            {orders}
         </div>
      )
   }
}

class Order extends React.Component {

   constructor(props){
      super(props);
      this.state = {
         value: this.props.data.orderStatus
      }
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event){
      this.setState({ value: event.target.value });
   }

    handleClick() {
        const data = {
            "id": this.props.id,
            "orderStatus": this.state.value,
            "firstName": this.props.data.firstName,
            "lastName": this.props.data.lastName
        }
        const request = new XMLHttpRequest();
        let url = "https://localhost:44329/api/Owner/ChangeOrderStatus";

        request.open("PUT", url);
        request.setRequestHeader("Content-Type", "application/json");
        request.send(JSON.stringify(data));
        alert("Saved successfully!");
    }
   render(){
      if(this.state.value !== 3){
         return (
             <div className="order">
               <div className="datas">
                  <div className="timestamp">{this.props.data.timestamp}</div>
                  <div className="order-name">{this.props.data.firstName + " " + this.props.data.lastName}</div>
                  <div className="order-city">{this.props.data.city},</div>
                  <div className="order-street">{this.props.data.street}</div>
                  <div className="order-phone">{this.props.data.phoneNumber}</div>
                  <div className="paymentType">{this.props.data.paymentType}</div>
                  <div className="orderSum">{this.props.data.orderSum} HUF</div>
                  <div className="order-foods"></div>
               </div>
               <div className="functions">
                  <select id="order-status" value={this.state.value} onChange={this.handleChange}>
                     <option value="0">New</option>
                     <option value="1">In Progress</option>
                     <option value="2">Delivering</option>
                     <option value="3">Done</option>
                     <option value="4">Cancelled</option>
                     </select>
                     <button id="changeStatus" onClick={() => { this.handleClick() }}>Save</button>
               </div>
            </div>
         )
      }
      else
         return (<div></div>)
   }
}

export default ManageOrders

/*
  OrderStatus ->
   0 -> New
   1 -> InProgress
  2 -> Delivering
  3 -> Done
  4 -> Cancelled
*/
const json = [
    {
        "id": "",
        "timestamp": "",
        "firstName": "",
        "lastName": "",
        "city": "",
        "street": "",
        "phoneNumber": "",
        "paymentType": "",
        "orderSum": 20000,
        "orderStatus": "",
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    }
]
