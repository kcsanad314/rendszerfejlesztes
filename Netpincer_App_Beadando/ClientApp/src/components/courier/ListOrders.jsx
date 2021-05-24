import React from 'react'
import ReactDragListView from 'react-drag-listview/lib/index.js';

class ListOrders extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
        orders: [],
        value: ""
    }
  }

  componentDidMount(){
   const orders = [];
   // let order = {
   //    timeStamp: "",
   //    street: "",
   //    city: "",
   //    name: + " " + ,
   //    payment:  + " - " +
      // }
      const request = new XMLHttpRequest();
      let url = "https://localhost:44329/api/Owner/GetAllOrders";

      request.open("GET", url);
      request.onload = () => {
          // console.log(request.responseText);
          const data = JSON.parse(request.responseText);
          for (let order of data) {
              orders.push(order); 
          }  
          this.setState({ orders:orders });
      }
      request.send();
 }

    render() {
        const orders = [];
        for (let i = 0; i < this.state.orders.length; i++) {
            orders.push(<Order key={i} id={this.state.orders[i].id} data={this.state.orders[i]} />);
          
        }
    return (
      <div className="orders-courier">
        <h2>Orders</h2>
        <div className="order-list">
                {orders}
        </div>
      </div>
    );
  }
}
class Order extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.data.orderStatus
        }
        console.log(this.props.data);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
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
    render() {
        if (this.state.value !== 3) {
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
                            <option value="1">New</option>
                            <option value="2">Delivering</option>
                            <option value="3">Done</option>
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
export default ListOrders
