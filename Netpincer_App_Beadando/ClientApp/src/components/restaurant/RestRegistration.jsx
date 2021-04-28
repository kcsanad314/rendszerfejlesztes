import React from 'react'
import ActionButton from '../ActionButton'

class RestRegistration extends React.Component {

    /*componentDidMount() {
        document.getElementById("saverestaurant").addEventListener("click", () => {
            const request = new XMLHttpRequest();
            request.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(request.responseText);
                }
            }
            const url = "https://localhost:44329/api/Owner/RegisterRestaurant";
            const name = document.getElementById("name").value;
            const location = document.getElementById("location").value;
            const openingHours = document.getElementById("openinghours").value;
            const description = document.getElementById("description").value;
            const style = document.getElementById("style").value;

            const body = {
                "Name": name,
                "City": location,
                "Street": "utsza",
                "HouseNumber": "10",
                "Description": description
            }

            request.open("POST", url);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(body));
        });
     }
    */

    render() {
        return (
            <div className="rest-registration">
                <div className="inputs">
                    <label>
                        Name:
               <input type="text" id="name" />
                    </label>
                    <label>
                        Location:
               <input type="text" id="location" />
                    </label>
                    <label>
                        Opening Hours:
               <input type="text" id="openinghours" />
                    </label>
                    <label>
                        Description:
               <input type="text" id="description" />
                    </label>
                    <label>
                        Style:
               <input type="text" id="style" />
                    </label>
                </div>
                <ActionButton id="saverestaurant" name="Save" url="/restaurant" />
            </div>
        )
    }

}

export default RestRegistration
