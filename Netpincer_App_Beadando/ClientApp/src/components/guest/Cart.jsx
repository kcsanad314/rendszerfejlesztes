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
      localStorage.clear();
   }

   toCheckout(move){
      let sum = 0;
      for(let item of this.props.items)
         sum += item[1];

      localStorage.setItem("amount", sum);
      localStorage.setItem("cartData", this.props.items);
      localStorage.setItem("restaurantId", this.props.id);

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
      console.log(this.props.id);
      if(this.state.redirect)
         return <Redirect to="/checkout" />

      return (
         <div className="cart">
            {this.rendering()}
            <button className="toCheckout-button" onClick={() => {this.toCheckout()}}>Proceed to checkout</button>
         </div>
      )
   }
}

export default Cart
