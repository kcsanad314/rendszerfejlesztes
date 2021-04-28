import React from 'react'

function RestaurantsList(props) {
    return (
      <div className="container">
        <div className="restaurant-card">
            <div className="name">
                {props.name}
            </div>
            <div className="city">
                {props.city},
            </div>
            <div className="address">
                {props.address}
            </div>
            <div className="description">
                {props.description}
            </div>
        </div>
        <div className="list-button" onClick={() => props.handleClick(props.id)}>
           <img src="icons/arrow.png" alt=""/>
        </div>
      </div>
    )
}

export default RestaurantsList
