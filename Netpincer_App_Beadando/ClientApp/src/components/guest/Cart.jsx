import React from 'react'
import { Redirect } from 'react-router'
import CartItem from './CartItem'

class Cart extends React.Component {
   constructor(props){
       super(props);
       
      this.state = {
          redirect: false,
          amounts: []
      }
      this.toCheckout = this.toCheckout.bind(this);
       this.changePiece = this.changePiece.bind(this);
   }

    componentDidMount() {
        const amounts = [];
        for (let i = 0; i < 20; i++) {
            amounts.push(1);
        }
        this.setState({ amounts: amounts });
        console.log(this.state.amounts);
      localStorage.removeItem("amount");
      localStorage.removeItem("cartData");
      localStorage.removeItem("restaurantId");
   }

    toCheckout(move) {
        let ids = [], names = [], price = [], amounts = [];
        amounts = this.state.amounts;
      let sum = 0;
        let i = 0;
      for(let item of this.props.items){
         sum += item[1] * amounts[i];
         names.push(item[0])
         price.push(item[1] * amounts[i])
          ids.push(item[2]);
          i++;
      }

      // localStorage.setItem("cartData", JSON.stringify(this.props.items));
      localStorage.setItem("amount", sum);
      localStorage.setItem("restaurantId", this.props.id);
      localStorage.setItem("foodNames", JSON.stringify(names));
      localStorage.setItem("foodPrice", JSON.stringify(price));
      localStorage.setItem("foodIds", JSON.stringify(ids));

      this.setState({redirect: true});
   }

    changePiece(up, id) {
        console.log(this.state.amounts);
        const newElements = this.state.amounts.slice();
        if (up) {
            newElements[id] = this.state.amounts[id] + 1;
            this.setState({ amounts: newElements } );
        }else {
            if (this.state.piece !== 0) {
                newElements[id] = this.state.amounts[id] - 1;
                this.setState({amounts: newElements });
            }   
        }
    }

   rendering(){
      const items = [];
      let i = 0;
       for (let item of this.props.items) {
           items.push(<CartItem key={i} id={i} name={item[0]} price={item[1]} amount={this.state.amounts[i]} changePiece={this.changePiece} />);
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
