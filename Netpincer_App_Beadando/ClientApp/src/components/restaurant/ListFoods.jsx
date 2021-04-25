import React from 'react'
import Cart from '../guest/Cart'

class ListFoods extends React.Component {

   constructor(){
      super();
      this.state = {
         items: []
      }
      this.handleClick = this.handleClick.bind(this);
   }

   handleClick(name, price){
      const tuple = [name, price];
      this.setState(prevState => {
         return {
            items: [...prevState.items, tuple]
         }
      });
   }

   render(){
      const foods = [];
      let i = 0;
      let cat = false;
      for(let category of this.props.category){
         cat = true;
         for (let food of category.foods) {
            foods.push(<Food key={i}
               name={food.name}
               price={food.price}
               allergenes={food.allergenes}
               categoryName={cat ? category.name : null}
               addToCart={this.handleClick}
            />);
            i++;
            cat = false;
         }
      }
   
      return (
          <div className="foods">
              {foods}
              <Cart items={this.state.items}
                  name={this.state.name}
                  id={this.props.id} />
          </div>
      )
   }
}

function Food(props) {

    return (
         <div>
            <div className="category">
                {props.categoryName}
            </div>
           <div className="food" onClick={() => props.addToCart(props.name, props.price)}>
               <div className="food-name">
                   {props.name}
               </div>
               <div className="food-price">
                   {props.price}
               </div>
               <div className="food-allergens">
                   {props.allergens}
               </div>
           </div>
         </div>
    )
}

export default ListFoods
