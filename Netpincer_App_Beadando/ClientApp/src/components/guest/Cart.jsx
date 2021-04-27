import React from 'react'
import { Redirect } from 'react-router'
import CartItem from './CartItem'

class Cart extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         redirect: false
      }
      this.toCheckout = this.toCheckout.bind(this);
   }

   componentDidMount(){
      localStorage.removeItem("amount");
      localStorage.removeItem("cartData");
      localStorage.removeItem("restaurantId");
   }

   toCheckout(move){
      let sum = 0;
      let ids = [], names = [], price = [];

      for(let item of this.props.items){
         sum += item[1];
         names.push(item[0])
         price.push(item[1])
         ids.push(item[2]);
      }

      // localStorage.setItem("cartData", JSON.stringify(this.props.items));
      localStorage.setItem("amount", sum);
      localStorage.setItem("restaurantId", this.props.id);
      localStorage.setItem("foodNames", JSON.stringify(names));
      localStorage.setItem("foodPrice", JSON.stringify(price));
      localStorage.setItem("foodIds", JSON.stringify(ids));

      this.setState({redirect: true});
   }

   rendering(){
      const items = [];
      let i = 0;
      for(let item of this.props.items){
         items.push(<CartItem key={i} name={item[0]} price={item[1]} />);
         i++;
      }
      return items;
   }

   render(){
      // console.log(this.props.id);
      if(this.state.redirect)
         return <Redirect to="/checkout" />

      return (
         <div className="cart">
            <label className="my-cart">My Cart</label>
            {this.rendering()}
            <button className="toCheckout-button" onClick={() => {this.toCheckout()}}>Proceed to checkout</button>
         </div>
      )
   }
}

export default Cart
