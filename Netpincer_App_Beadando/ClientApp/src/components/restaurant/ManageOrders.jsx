import React from 'react'

class ManageOrders extends React.Component {

   constructor(){
      super();
      this.state = {
         orders: 0
      }
   }

   componentDidMount(){

      this.setState({orders: 4});
   }

   render(){
      const orders = [];
      for(let i = 0; i < this.state.orders; i++)
         orders.push(<Order key={i} />);

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
               infok
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

export default ManageOrders
