import React from 'react'
import ActionButton from './ActionButton'
import { Redirect } from 'react-router'

class LogInForm extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            link: ""
        };        
    }

    componentDidMount() {
       localStorage.clear();
        document.getElementById("login").addEventListener("click", () => {
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
                    localStorage.setItem("userId", type.item2);
                    switch (type.item1) {
                        case 1:
                            this.setState({
                                redirect: true,
                                link: 'restaurant'
                            });
                            break;
                        case 2:
                            this.setState({
                                redirect: true,
                                link: 'courier'
                            });
                            break;
                        default:
                            this.setState({
                                redirect: true,
                                link: 'guest'
                            });
                    }
                }
                else {
                    alert("Rossz felhasználó név vagy jelszó!");
                }
                //userId = ha ide beadod a bejelentkezett id-t elvileg menni fog a login teljesen
                // localStorage.setItem("userId", userId);
            }
            request.send(JSON.stringify(body));
        });
    }

   render(){
      const link = "/" + this.state.link;
      if(this.state.redirect)
         return <Redirect to={link} />


      return (
         <div>
            <form className="login-form">
               Username:
               <input type="text" id="username"/>
               Password:
               <input type="password" id="password"/>
               <div className="buttons">
                  <ActionButton id="login" name="Log In" url={this.state.link }/>
                  <ActionButton id="signup" name="Sign Up" url="/signup"/>
               </div>
            </form>
         </div>
      )
    }


}

export default LogInForm
