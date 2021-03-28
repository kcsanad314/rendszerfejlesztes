import React from 'react'
import ActionButton from './ActionButton'

class SignInForm extends React.Component {

   constructor(){
      super();
      this.state = {
         avatar: "guest"
      }
   }

   componentDidMount(){
      const container = document.getElementsByClassName("container");
      const icons = document.getElementsByClassName("icon");
      container[0].classList.add("container-active");
      for(let i = 0; i < container.length; i++){
         container[i].addEventListener('click', () => {
            this.setState({
               avatar: icons[i].alt
            });
            container[i].classList.add("container-active");
            for(let j = 0; j < container.length; j++){
               if(i !== j)
                  container[j].classList.remove("container-active");
            }
            // console.log(this.state.avatar)

         });
       }
       document.getElementById("signin-action").addEventListener("click", () => {
           const request = new XMLHttpRequest();
           request.onreadystatechange = ()=> {
               if (this.readyState == 4 && this.status == 200) {
                   console.log(request.responseText);
               }
           }
           const url = "https://localhost:44329/api/User/Create";
           /*
           var type = "";
           switch (this.state.avatar) {
               case "guest": type = "Customer";
                   break;
               case "owner": type = "Owner";
                   break;
               default: type = "Courier";
                   break;
           }
           */
           const firstName = document.getElementById("firstname").value;
           const lastName = document.getElementById("lastname").value;
           const userName = document.getElementById("username").value;
           const password = document.getElementById("password").value;
           const passwordAgain = document.getElementById("password-again").value;
           const email = document.getElementById("email").value;
           const body = {
               "UserName": userName,
               "Password": password,
               "ConfirmPassword": passwordAgain,
               "FirstName": firstName,
               "LastName": lastName
           }
           request.open("POST", url);
           request.setRequestHeader("Content-Type", "application/json");
           request.send(JSON.stringify(body));
       })
   }

   icon(name){
      const src = "icons/" + name + ".png";
      return (
         <div className="container">
            <img src={src} className="icon" alt={name}/>
            <div className="middle">
               <div className="text">{name}</div>
            </div>
         </div>
      )
   }

   iconPanel(){
      return (
         <div className="icon-panel">
            {this.icon("guest")}
            {this.icon("courier")}
            {this.icon("owner")}
         </div>
      )
   }

   signInForm(){
      return (
         <form className="signin-form">
            <div className="inputs">
               <label>
                  First name:
                  <input type="text" id="firstname"/>
               </label>
               <label>
                      Last name:
                  <input type="text" id="lastname"/>
               </label>
               <label>
                      Username:
                  <input type="text" id="username"/>
               </label>
               <label>
                      Password:
                  <input type="password" id="password"/>
               </label>
               <label>
                      Password again:
                  <input type="password" id="password-again"/>
               </label>
               <label>
                      E-mail:
                  <input type="text" id="email"/>
               </label>
            </div>
            <ActionButton id="signin-action" name="Sign In" url=""/>
            <div className="specData">
               {this.specData()}
            </div>
         </form>
      )
   }

   specData(){
      if(this.state.avatar === "guest")
         return (this.specDataGuest())
      if(this.state.avatar === "courier")
         return (this.specDataCourier())
      if(this.state.avatar === "owner")
         return (this.specDataOwner())

   }

   specDataGuest(){
      return (
         <div className="bonus-inputs">
            <label>
               Phone:
               <input type="text" name="phonenumber"/>
            </label>
            <label>
               Zip code:
               <input type="number" name="zipcode"/>
            </label>
            <label>
               Address:
               <input type="text" name="address"/>
            </label>
         </div>
      )
   }

   specDataCourier(){
      return (
         <div className="bonus-inputs">
            <label>
               Phone:
               <input type="text" name="phonenumber"/>
            </label>
            <label>
               Territory:
               <input type="text" name="territory"/>
            </label>
         </div>
      )
   }

   specDataOwner(){
      return (
         <div className="bonus-inputs">
            <label>
               Phone:
               <input type="text" name="phonenumber"/>
            </label>
         </div>
      )
   }

   render(){
      return (
         <div className="signin">
            {this.iconPanel()}
            {this.signInForm()}
         </div>
      )
   }
}

export default SignInForm
