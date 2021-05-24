import React from 'react'

class MyOrder extends React.Component {
    constructor() {
        super();
        this.state = {
            data: []
        }
    }

    componentDidMount() {
        const request = new XMLHttpRequest();
        const url = "https://localhost:44329/api/User/GetUserOrders/" + localStorage.getItem("userId");
        request.open("GET", url);
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            const orders = [];
            for (let order of data) {
                orders.push(order);
            }
            this.setState({ data: orders });

        }
        request.send();
    }

    render() {
        const orders = [];
        for (let order of this.state.data) {
            orders.push(<Order data={order} />);
        }
        return (
            <div className="myorder">
                {orders}
            </div>
        )
    }
}
class Order extends React.Component {

    constructor(props) {
        super(props);
    }
    render() {
        let status = "";
        if (this.props.data.orderStatus === 0) {
            status = "New order";
        } else if (this.props.data.orderStatus === 1) {
            status = "Order in progress";
        } else if (this.props.data.orderStatus === 2) {
            status = "Courier is on the way";
        } else if (this.props.data.orderStatus === 3) {
            status = "Order is delivered";
        } else if (this.props.data.orderStatus === 4) {
            status = "Order is cancelled :(";
        }
        let date = new Date(this.props.data.timestamp);
        return (
                <div className="order">
                <div className="datas">
                    <div className="timestamp">{date.getFullYear() + "/" + date.getMonth() + "/" + date.getDay() + "  " + date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds()}</div>
                        <div className="orderStatus">{status}</div>
                        <div className="order-name">{this.props.data.firstName + " " + this.props.data.lastName}</div>
                        <div className="order-city">{this.props.data.city},</div>
                        <div className="order-street">{this.props.data.street}</div>
                        <div className="order-phone">{this.props.data.phoneNumber}</div>
                        <div className="paymentType">{this.props.data.paymentType}</div>
                        <div className="deliveryTime">{this.props.data.deliveryTime} mins</div>
                        <div className="orderSum">{this.props.data.orderSum} HUF</div>
                        <div className="order-foods"></div>
                    </div>    
                </div>
            )
    }
}
export default MyOrder
