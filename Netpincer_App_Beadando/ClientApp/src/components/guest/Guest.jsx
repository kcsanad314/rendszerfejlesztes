import React from 'react'
import './Guest.css'
import GuestListRestaurants from './GuestListRestaurants';


class Guest extends React.Component {
    constructor() {
        super();
        this.state = {
            id: 0
        };
    }
    componentDidMount() {
        const buttons = document.getElementsByClassName("getfoods");
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].addEventListener('click', () => {
                this.setState({
                    id: i + 1
                });
            });
        }
    }

    rendering() {
        switch (this.state.id) {
            case 1:
                return (<GuestListRestaurants />);
                break;
        }
    }

    render() {
      return (
         <div className="guest">
            <button className="getfoods">List restaurants</button>
              {
                  this.rendering()
              }
          </div>      
      )
   }
}

export default Guest
