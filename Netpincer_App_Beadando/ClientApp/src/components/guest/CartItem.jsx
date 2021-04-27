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
            <div className="item-name">{this.props.name}</div>
            <div className="item-buttons">
               <button onClick={() => this.changePiece(false)}>-</button>
               <div className="item-piece">{this.state.piece}</div>
               <button onClick={() => this.changePiece(true)}>+</button>
            </div>
            <div className="price">{this.props.price * this.state.piece} Ft</div>
         </div>
      )
   }
}

export default CartItem
