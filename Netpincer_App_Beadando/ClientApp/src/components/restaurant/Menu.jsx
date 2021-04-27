import React from 'react'
import ActionButton from '../ActionButton'

class Menu extends React.Component {

   constructor(){
      super();
      this.state = {
         category: 0
      }
      this.catSelected = this.catSelected.bind(this);
   }

    /*componentDidMount() {
        document.getElementById("savemenu").addEventListener("click", () => {
            const request = new XMLHttpRequest();
            request.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(request.responseText);
                }
            }
            const url = "https://localhost:44329/api/Owner/AddFoodCategory";
            const category = document.getElementById("category-list").value;
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
    }*/

   renderCategories(){
      const cats = [];
      for(let i = 0; i < this.props.categories.length; i++){
         cats.push(<option key={i} value={i}>{i}</option>);
      }
      return cats;
   }
   catSelected(e){
      this.setState({
         category: e.target.value
      });
   }

   addCategory(){
      const cat = prompt("Please enter the new category name:", "");
      if(cat !== ""){
         let select = document.getElementById("category-list");
         let opt = document.createElement('option');
         opt.innerHTML = cat;
         select.appendChild(opt);
         select.options.selectedIndex = select.length - 1;
      }
   }

   render(){
      // console.log(document.getElementById("category-list").value);
      return (
         <div className="menu">
            <div className="category">
               Category name:
               <select id="category-list" onChange={this.catSelected}>
                  {this.renderCategories()}
               </select>
               <button id="add-category" onClick={this.addCategory}>+</button>
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
              <ActionButton id="save-menu" name="Save" url="/restaurant" />
         </div>
      )
   }
}

export default Menu
