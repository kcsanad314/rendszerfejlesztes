import React from 'react'
import RestaurantsList from './RestaurantsList'
import ListFoods from '../restaurant/ListFoods'

class GuestListRestaurants extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants: json,
            id: 0,
            restId: ""
        };
         this.handleClick = this.handleClick.bind(this);
    }
    componentDidMount() {
        const button = document.getElementsByClassName("getfoods");

        const request = new XMLHttpRequest();
        const url = "https://localhost:44329/api/Owner/GetRestaurantFoodList";
        request.open("GET", url);
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            var restaurants = [];

            for (let restaurant of data) {
                restaurants.push(restaurant);
            }
            // console.log(restaurants);
            this.setState({
                restaurants: restaurants,
                restId: restaurants[0].id
            })

        }
        request.send();
    }

    handleClick(key, restId) {
        console.log(restId);
       this.setState({
           id: key,
           restId: restId   
       });
   }

    render() {
        const rest_arr = [];
        let i = 0;
        for (let rest of this.state.restaurants) {
            rest_arr.push(<RestaurantsList key={i}
                id={i}
                restId={rest.id}
               name={rest.name}
               city={rest.city}
               address={rest.street + " " + rest.houseNumber}
               description={rest.description}
               handleClick={this.handleClick} />)
            i++;
        }
        return (
            <div className="restaurants">
               <div className="list">
                  {rest_arr}
               </div>
               <ListFoods restaurant={0} category={this.state.restaurants[this.state.id].foodCategories} id={this.state.restId} />
            </div>
        )
    }
}


export default GuestListRestaurants

const json = [
    {
        "id": 1,
        "name": "vmi",
        "city": "bp",
        "street": "",
        "houseNumber": "",
        "description": "",
        "foodCategories": [
            {
                "id": 1,
                "name": "kaja",
                "restaurantId": 1,
                "foods": [
                    {
                        "id": 1,
                        "name": "",
                        "price": 0,
                        "allergenes": "",
                        "foodId": 1
                    },
                    {
                        "id": 2,
                        "name": "",
                        "price": 0,
                        "allergenes": "",
                        "foodId": 1
                    }
                ]
            }
         ]
   }
];

const json2 = [
    {
        "id": 1,
        "name": "",
        "city": "",
        "street": "",
        "houseNumber": "",
        "description": "",
        "foodCategories": [
            {
                "id": 1,
                "name": "",
                "restaurantId": 1,
                "foods": [
                    {
                        "id": 1,
                        "name": "",
                        "price": 0,
                        "allergenes": "",
                        "foodId": 1
                    }
                ]
            }
         ]
   }
];
