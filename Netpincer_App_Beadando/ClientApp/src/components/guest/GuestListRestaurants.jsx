import React from 'react'
import RestaurantsList from './RestaurantsList'
import ListFoods from '../restaurant/ListFoods'

class GuestListRestaurants extends React.Component {

    constructor() {
        super();
        this.state = {
            //restaurants: [],
            restaurants: json,
            id: 0
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
            console.log(restaurants);
            this.setState({
                restaurants: restaurants
            })

        }
        request.send();
    }

   handleClick(key){
      console.log(key)
      this.setState({id: key});
   }

    render() {
        const rest_arr = [];
        let i = 0;
        for (let rest of this.state.restaurants) {
            rest_arr.push(<RestaurantsList key={i}
               id={i}
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
               <ListFoods category={this.state.restaurants[this.state.id].foodCategories} id={this.state.id} />
            </div>
        )
    }
}


export default GuestListRestaurants

// name={rest.name} city={rest.city}
// address={rest.street + rest.houseNumber} description={rest.description}

const json = [
    {
        "id": 1,
        "name": "Zing",
        "city": "Budapest",
        "street": "Váci út",
        "houseNumber": "86",
        "description": "Zingel zongal zangható",
        "foodCategories": [
            {
                "id": 1,
                "name": "Burgers",
                "restaurantId": 1,
                "foods": [
                    {
                        "id": 1,
                        "name": "Zing",
                        "price": 3000,
                        "allergenes": null,
                        "foodId": 1
                    },
                    {
                        "id": 2,
                        "name": "Szaftos",
                        "price": 450,
                        "allergenes": null,
                        "foodId": 1
                    },
                    {
                        "id": 3,
                        "name": "Sajtos",
                        "price": 940,
                        "allergenes": null,
                        "foodId": 1
                    },
                    {
                        "id": 4,
                        "name": "Beles",
                        "price": 420,
                        "allergenes": null,
                        "foodId": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Pias",
                "restaurantId": 1,
                "foods": [
                    {
                        "id": 5,
                        "name": "Vogyesz",
                        "price": 900,
                        "allergenes": "alkohol",
                        "foodId": 2
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Mari koporsója",
        "city": "SzegedSzentMiki",
        "street": "Márton Géza út",
        "houseNumber": "101",
        "description": "Rettenet hely",
        "foodCategories": [
            {
                "id": 1,
                "name": "Pizzak",
                "restaurantId": 2,
                "foods": [
                    {
                        "id": 1,
                        "name": "Sonkas",
                        "price": 4321,
                        "allergenes": "gomba",
                        "foodId": 1
                    },
                    {
                        "id": 2,
                        "name": "Bolondos",
                        "price": 2400,
                        "allergenes": "kecske/sajt",
                        "foodId": 1
                    },
                    {
                        "id": 3,
                        "name": "Burger1",
                        "price": 3000,
                        "allergenes": null,
                        "foodId": 1
                    },
                    {
                        "id": 4,
                        "name": "Burger1",
                        "price": 3000,
                        "allergenes": null,
                        "foodId": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Krumplik",
                "restaurantId": 2,
                "foods": [
                    {
                        "id": 5,
                        "name": "Rántott",
                        "price": 110,
                        "allergenes": "krumpli",
                        "foodId": 2
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Mari koporsója",
        "city": "SzegedSzentMiki",
        "street": "Márton Géza út",
        "houseNumber": "101",
        "description": "Rettenet hely",
        "foodCategories": [
            {
                "id": 1,
                "name": "Pizzak",
                "restaurantId": 2,
                "foods": [
                    {
                        "id": 1,
                        "name": "Sonkas",
                        "price": 4321,
                        "allergenes": "gomba",
                        "foodId": 1
                    },
                    {
                        "id": 2,
                        "name": "Bolondos",
                        "price": 2400,
                        "allergenes": "kecske/sajt",
                        "foodId": 1
                    },
                    {
                        "id": 3,
                        "name": "Burger1",
                        "price": 3000,
                        "allergenes": null,
                        "foodId": 1
                    },
                    {
                        "id": 4,
                        "name": "Burger1",
                        "price": 3000,
                        "allergenes": null,
                        "foodId": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Krumplik",
                "restaurantId": 2,
                "foods": [
                    {
                        "id": 5,
                        "name": "Rántott",
                        "price": 110,
                        "allergenes": "krumpli",
                        "foodId": 2
                    }
                ]
            }
        ]
    },
    {
        "id": 2,
        "name": "Mari koporsója",
        "city": "SzegedSzentMiki",
        "street": "Márton Géza út",
        "houseNumber": "101",
        "description": "Rettenet hely",
        "foodCategories": [
            {
                "id": 1,
                "name": "Pizzak",
                "restaurantId": 2,
                "foods": [
                    {
                        "id": 1,
                        "name": "Sonkas",
                        "price": 4321,
                        "allergenes": "gomba",
                        "foodId": 1
                    },
                    {
                        "id": 2,
                        "name": "Bolondos",
                        "price": 2400,
                        "allergenes": "kecske/sajt",
                        "foodId": 1
                    },
                    {
                        "id": 3,
                        "name": "Burger1",
                        "price": 3000,
                        "allergenes": null,
                        "foodId": 1
                    },
                    {
                        "id": 4,
                        "name": "Burger1",
                        "price": 3000,
                        "allergenes": null,
                        "foodId": 1
                    }
                ]
            },
            {
                "id": 2,
                "name": "Krumplik",
                "restaurantId": 2,
                "foods": [
                    {
                        "id": 5,
                        "name": "Rántott",
                        "price": 110,
                        "allergenes": "krumpli",
                        "foodId": 2
                    }
                ]
            }
        ]
    }
];

const json_eredeti = [
   {
      "name": "Géza vendéglő",
      "city": "Budapest",
      "street": "Jókai u.",
      "houseNumber": "20.",
      "description": "Barátságos, közkedvelt vidék. Kifogástalan ételek."
   },
   {
      "name": "Mari kocsmája",
      "city": "Gödöllő",
      "street": "Margit körút",
      "houseNumber": "1/A",
      "description": "Gyere be. Nem kell félned, gyere be."
   },
   {
      "name": "Repertoar",
      "city": "Miskolc",
      "street": "Kés Elek utca",
      "houseNumber": "101",
      "description": "Kifinomult francia ételek, magyar terítőn, szűz lányok által tálalva, lágy jazz zenével."
   },
   {
      "name": "Repertoar",
      "city": "Miskolc",
      "street": "Kés Elek utca",
      "houseNumber": "101",
      "description": "Kifinomult francia ételek, magyar terítőn, szűz lányok által tálalva, lágy jazz zenével."
   },
   {
      "name": "Repertoar",
      "city": "Miskolc",
      "street": "Kés Elek utca",
      "houseNumber": "101",
      "description": "Kifinomult francia ételek, magyar terítőn, szűz lányok által tálalva, lágy jazz zenével."
   },
   {
      "name": "Repertoar",
      "city": "Miskolc",
      "street": "Kés Elek utca",
      "houseNumber": "101",
      "description": "Kifinomult francia ételek, magyar terítőn, szűz lányok által tálalva, lágy jazz zenével."
   },
   {
      "name": "Repertoar",
      "city": "Miskolc",
      "street": "Kés Elek utca",
      "houseNumber": "101",
      "description": "Kifinomult francia ételek, magyar terítőn, szűz lányok által tálalva, lágy jazz zenével."
   }
];

const jsonFoods = [
   {
      "name": "Italok",
      "foods": [
         {
            "name": "Ruszki",
            "price": "1400",
            "allergens": "alkohol"
         },
         {
            "name": "Ruszki",
            "price": "1400",
            "allergens": "alkohol"
         }
      ]
   }
];
