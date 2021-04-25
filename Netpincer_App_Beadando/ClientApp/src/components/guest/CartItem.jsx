import React from 'react'

class CartItem extends React.Component {
   constructor(props){
      super(props);
      this.state = {
         piece: 1
      }
   }

   changePiece(up){
      if(up)
         this.setState(prevState => {return {piece: prevState.piece + 1}});
      else{
         if(this.state.piece !== 0)
            this.setState(prevState => {return {piece: prevState.piece - 1}});
      }
   }

   render(){
      return (
         <div className="item">
            <div className="name">{this.props.name}</div>
            <button onClick={() => this.changePiece(false)}>-</button>
            <div className="">{this.state.piece}</div>
            <button onClick={() => this.changePiece(true)}>+</button>
            <div className="price">{this.props.price * this.state.piece}</div>
         </div>
      )
   }
}

export default CartItem
