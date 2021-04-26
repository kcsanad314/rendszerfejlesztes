import React from 'react'

class ManageOrders extends React.Component {

   constructor(){
      super();
      this.state = {
         orders: json
      }
   }

    componentDidMount() {
        const restId = 1;
        const request = new XMLHttpRequest();
        let url = "https://localhost:44329/api/Owner/GetRestaurantOrderList/" + restId;
        
        request.open("GET", url);
        request.onload = () => {
            console.log(request.responseText);
            const data = JSON.parse(request.responseText);
            let order_arr = [];
            for (let order of data)
            {
                order_arr.push(order);
                //console.log(order);
            }
            console.log(order_arr);
            this.setState({ orders: order_arr });
        }
        request.send();

   }

   render(){
      const orders = [];
       for (let i = 0; i < this.state.orders.length; i++) {
          console.log(this.state.orders[i]);
           orders.push(<Order data = { this.state.orders[i]}/>);
       }
      return (
         <div className="orders">
            {orders}
         </div>
      )
   }
}

class Order extends React.Component {

   render(){
      return (
          <div className="order">       
            <div className="datas">
                  {
                      this.props.data.timestamp,
                      this.props.data.firstName
                  }
            </div>
            <select id="order-status">
               <option value="">New</option>
               <option value="">In Progress</option>
               <option value="">Transport</option>
               <option value="">Decline</option>
            </select>
            <button id="changeStatus">Save</button>
         </div>
      )
   }
}


/*
 * OrderStatus ->
 *  0 -> New
 *  1 -> InProgress
 *  2 -> Delivering
 *  3 -> Done
 *  4 -> Cancelled
 * /
const json = [
    {
        "id": 1,
        "timestamp": "2021-04-24T00:00:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": "Valami street 29",
        "phoneNumber": "06301234567",
        "paymentType": "Csak a kártya",
        "orderSum": 20000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 7,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 7000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 8,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 7000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 9,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 7000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 10,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 7000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 11,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 7000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 12,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 7000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 15,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "FirstName",
        "lastName": "LastName",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 7000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 16,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "valami",
        "lastName": "valamiii",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "06301234567",
        "paymentType": "Bankkártya",
        "orderSum": 20000,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    },
    {
        "id": 17,
        "timestamp": "2021-04-25T13:21:00",
        "firstName": "valami",
        "lastName": "valamiii",
        "city": "Budapest",
        "street": null,
        "phoneNumber": "1234567",
        "paymentType": "asdasdasdasd",
        "orderSum": 4333321,
        "orderStatus": 0,
        "restaurantId": 1,
        "userId": 0,
        "orderFoods": null,
        "foodIds": null
    }
]

export default ManageOrders
