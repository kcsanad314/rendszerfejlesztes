import React from 'react'
import ListFoods from './ListFoods'

class OwnerListFoods extends React.Component {

    constructor() {
        super();
        this.state = {
            restaurants: {}
        }
    }

    componentDidMount() {
        const request = new XMLHttpRequest();
        const url = "https://localhost:44329/api/Owner/GetOwnerRestaurant/" + localStorage.getItem("restId");
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
            console.log(data);
        }
        
        request.send();
    }

    render() {
        // console.log(document.getElementById("category-list").value);
        const catNames = [];
        const foods = [];
        for (let i = 0; i < this.state.restaurants.length; i++) {
            foods.push(<ListFoods restaurant={1} id={i} category={this.state.restaurants[0].foodCategories} />);
            console.log(this.state.restaurants[0].foodCategories);
            for (let cat of this.state.restaurants[0].foodCategories)
                catNames.push(cat.name);
        }

        return (
            <div>
                {foods}
            </div>
        )
    }
}

export default OwnerListFoods
