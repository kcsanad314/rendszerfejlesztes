import React from 'react'
import ActionButton from './ActionButton'



/*
 * 1.) Bejelentkezés
 * 2.) Ha Owner, akkor még 1 request, amin f.név és pw-vel lekérjük a user id-t
 * 3.) (User id-t valahogy kimentjük)
 * 4.) User id alapján a másik oldalon le tudjuk kérni a rest id-t
 * 5.) Rest id alapján pedig az ételeket 
 */
class LogInForm extends React.Component {

    constructor() {
        super();
        this.state = {
            link: ''
        };
    }
    componentDidMount() {
        document.getElementById("login").addEventListener("click", () =>
        {
            const request = new XMLHttpRequest();
           
            const url = "https://localhost:44329/api/User/Login";
            const usrName = document.getElementById("username").value;
            const password = document.getElementById("password").value;

            const body = {
                "UserName": usrName,
                "Password": password
            }
            request.open("POST", url);
            request.setRequestHeader("Content-Type", "application/json");
            request.onload = () => {
                if (!(request.status === 500)) {
                    const type = JSON.parse(request.responseText);
                    switch (type.item1) {
                        case 1:
                            this.setState({
                                link: '/restaurant'
                            });
                            break;
                        case 2:
                            //Majd a futárhoz vigyen
                            this.setState({
                                link: '/restaurant'
                            });
                            break;
                        default:
                            this.setState({
                                link: '/guest'
                            });
                    }
                }
                else {
                    alert("Nem jó");  
                }
            }
            request.send(JSON.stringify(body));
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
               <ActionButton id="login" name="Log In" url={this.state.link }/>
               <ActionButton id="signin" name="Sign In" url="/signin"/>
            </div>
         </form>
      )
    }

    
}

export default LogInForm
