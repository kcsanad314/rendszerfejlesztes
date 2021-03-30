import React from 'react'
import ActionButton from '../ActionButton'

class Menu extends React.Component {


    componentDidMount() {
        document.getElementById("savemenu").addEventListener("click", () => {
            const request = new XMLHttpRequest();
            request.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(request.responseText);
                }
            }
            const url = "https://localhost:44329/api/Owner/AddFoodCategory";
            const category = document.getElementById("category").value;
            const foodname = document.getElementById("foodname").value;
            const price = document.getElementById("price").value;
            const allergens = document.getElementById("allergens").value;
            const description = document.getElementById("description").value;

            const body = {
                "Name": category,
                "RestaurantId": "1",
                "Foods": [
                    {
                        "Name": foodname,
                        "Price": price,
                        "Allergens": allergens
                    }
                ],
                "Street": "utsza",
                "HouseNumber": "10",
                "Description": description
            }

            request.open("POST", url);
            request.setRequestHeader("Content-Type", "application/json");
            request.send(JSON.stringify(body));
        });

    }

   render(){
      return (
         <div className="menu">
            <div className="category">
               Category name:
               <input type="text" id="category"/>
            </div>
            <div className="inputs">
               <label>
                      Food name:
                  <input type="text" id="foodname"/>
               </label>
               <label>
                      Price:
                  <input type="text" id="price"/>
               </label>
               <label>
                      Allergens:
                  <input type="text" id="allergens"/>
               </label>
               <label>
                      Description:
                  <input type="textfield" id="description"/>
               </label>
              </div>
              <ActionButton id="savemenu" name="Save" url="" />
         </div>
      )
   }
}

export default Menu
