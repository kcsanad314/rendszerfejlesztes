import React from 'react'
import RestaurantsList from './RestaurantsList'

class GuestListRestaurants extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants: []
        };
    }
    componentDidMount() {
        const button = document.getElementsByClassName("getfoods");

        const request = new XMLHttpRequest();
        const url = "https://localhost:44329/api/Owner/GetRestaurants";
        request.open("GET", url);
        request.onload = () => {
            const data = JSON.parse(request.responseText);
            var restaurants = [];
            for (let restaurant of data) {
                restaurants.push(restaurant);
            }
            this.setState({
                restaurants: restaurants
            })
        }
        request.send();
    }

    render() {
        const rest_arr = [];
        for (let rest of this.state.restaurants) {
            rest_arr.push(<RestaurantsList name={rest.name} city={rest.city} address={rest.street + rest.houseNumber} description={rest.description} />)
        }
        return (
            <div className="restaurants">
                <div className="list">
                    {
                        rest_arr
                    }
                </div>
            </div>
        )
    }
}


export default GuestListRestaurants