import React from 'react'
import ActionButton from './ActionButton'

class LogInForm extends React.Component {


    componentDidMount() {
        document.getElementById("login").addEventListener("click", () =>
        {
            const request = new XMLHttpRequest();
            request.onreadystatechange = () => {
                if (this.readyState == 4 && this.status == 200) {
                    console.log(request.responseText);
                }
            }
            const url = "https://localhost:44329/api/User/Login";
            const usrName = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            console.log(usrName, password);
            const body = {
                "UserName": usrName,
                "Password": password
            }
            request.open("GET", url);
            request.setRequestHeader("Content-Type", "application/json");
            request.send();
        })
    }
   render(){
      return (
         <form className="login-form">
            Username:
            <input type="text" id="username"/>
            Password:
            <input type="password" id="password"/>
            <div className="buttons">
               <ActionButton id="login" name="Log In" url="/shop"/>
               <ActionButton id="signin" name="Sign In" url="/signin"/>
            </div>
         </form>
      )
    }

    
}

export default LogInForm
