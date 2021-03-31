import React from 'react'

function ListFoods(props){


   const foods_list = [];
   let i = 0;
    for (let food of props.category.foods) {
       foods_list.push(<Food key={i} name={food.name} price={food.price} allergenes={food.allergenes} />);
       i++;
    }

   return (
       <div className="food-category">
           
           <div className="category">
               {
                   props.category.name
               }
           </div>
           {
               foods_list
           }
       </div>

   )
}

function Food(props) {
    return (
        <div className="Food">
            <div className="Name">
                {
                    props.name
                }
            </div>
            <div className="Price">
                {
                    props.price
                }
            </div>
            <div className="Allergens">
                {
                    props.allergens
                }
            </div>
        </div>

    )
}

export default ListFoods
