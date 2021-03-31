import React from 'react'

function RestaurantsList(props) {
    return (
        <div className="restaurant">
            <div className="Name">
                {
                    props.name
                }
            </div>
            <div className="City">
                {
                    props.city
                }
            </div>
            <div className="Address">
                {
                    props.address
                }
            </div>
            <div className="Description">
                {
                    props.description
                }
            </div>
        </div>
    )
}


export default RestaurantsList
