import React from 'react'
import './Guest.css'
import GuestListRestaurants from './GuestListRestaurants'
import MyOrder from './MyOrder'


class Guest extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0
        };
    }
    componentDidMount() {
        const buttons = document.getElementsByClassName("sidebarButton");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                this.setState({
                    id: i + 1
                });
            });
        }
        // fetch("https://api.themoviedb.org/3/movie/550?api_key=27b80274c2b28a9b54c267cfb0068d79", {
        //  	"method": "GET"
        //  })
        //  .then(response => {
        //  	console.log(response.json());
        //  })
        //  .catch(err => {
        //  	console.error(err);
        //  });
    }

    rendering() {
        if(this.state.id === 1)
          return (<GuestListRestaurants />);
        if(this.state.id === 2)
          return (<MyOrder />);
    }

    render() {
      return (
         <div className="guest">
            <div className="sidebar sidebar-guest">
               <div id="1" className="sidebarButton">Restaurants</div>
               <div id="2" className="sidebarButton">My order</div>
            </div>
            <div className="guest-option">
               {this.rendering()}
            </div>
         </div>
      )
   }
}

export default Guest
