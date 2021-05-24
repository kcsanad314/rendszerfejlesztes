import React from 'react'

class CartItem extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         piece: 1
      }
   }

   render(){
      return (
         <div className="item">            
            <div className="item-name">{this.props.name}</div>
            <div className="item-buttons">
               <button onClick={() => this.props.changePiece(false, this.props.id)}>-</button>
               <div className="item-piece">{this.props.amount}</div>
                  <button onClick={() => this.props.changePiece(true, this.props.id)}>+</button>
              </div>
              <div className="price">{this.props.price * this.props.amount} Ft</div>
         </div>
      )
   }
}

export default CartItem
