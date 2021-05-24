import React from 'react'
import Cart from '../guest/Cart'

class ListFoods extends React.Component {

   constructor(){
      super();
      this.state = {
          items: [],
          refresh: false
      }
      this.handleClick = this.handleClick.bind(this);
   }

    //shouldComponentUpdate() {
    //}

   handleClick(name, price, id){
      if(this.props.restaurant === 1){
         const disc = prompt("Please enter the discount(%):", "");
         let newPrice = (1 - disc/100);
          const request = new XMLHttpRequest();
          const url = "https://localhost:44329/api/Owner/MakeDiscount";
          let newId = 0;
          for (let category of this.props.category) {
              for (let food of category.foods) {
                  if (food.name === name) {
                      newId = food.id;
                  }
              }
          }
          const body = {
              "id": newId,
              "discountMultiplier": newPrice,
          }

          request.open("PUT", url);
          request.setRequestHeader("Content-Type", "application/json");
          request.send(JSON.stringify(body));
          this.setState({
              refresh: true
          });
      }
      else {
         let contains = false;
         const tuple = [name, price, id];
         for(let e of this.state.items){
            if(e[0] === tuple[0])
               contains = true;
         }
         if(!contains){
            this.setState(prevState => {
               return {
                  items: [...prevState.items, tuple]
               }
            });
         }
       }
   }

   render(){
      const foods = [];
      let i = 0;
      let cat = false;
      for(let category of this.props.category){
         cat = true;
         for (let food of category.foods) {
            foods.push(<Food key={i}
               id={i+1}
               name={food.name}
               price={food._price}
               allergenes={food.allergenes}
               categoryName={cat ? category.name : null}
               addToCart={this.handleClick}
            />);
            i++;
            cat = false;
         }
      }

      if(this.props.restaurant === 0){
         return (
            <div>
               <div className="foods">
                  {foods}
                </div>
                 <Cart items={this.state.items}
                     name={this.state.name}
                     id={this.props.id} />
            </div>
         )
      }
      else {
         return (
             <div className="foods-restaurant">
                <div className="foods">
                   {foods}
                </div>
             </div>
         )
      }
   }
}

function Food(props) {

    return (
         <div>
            <div className="category">
                {props.categoryName}
            </div>
           <div className="food" onClick={() => props.addToCart(props.name, props.price, props.id)}>
               <div className="food-row">
                  <div className="food-name">
                      {props.name}
                  </div>
                  <div className="food-price">
                      {props.price} Ft
                  </div>
               </div>
               <div className="food-allergens">
                   {props.allergenes}
               </div>
           </div>
         </div>
    )
}

export default ListFoods
