import React from 'react'
import ActionButton from './ActionButton'
import { Redirect } from 'react-router'

/*
 * 1.) Bejelentkez�s
 * 2.) Ha Owner, akkor m�g 1 request, amin f.n�v �s pw-vel lek�rj�k a user id-t
 * 3.) (User id-t valahogy kimentj�k)
 * 4.) User id alapj�n a m�sik oldalon le tudjuk k�rni a rest id-t
 * 5.) Rest id alapj�n pedig az �teleket
 */
class LogInForm extends React.Component {

    constructor() {
        super();
        this.state = {
            redirect: false,
            link: ""
        };
        this.orderButton = this.orderButton.bind(this);
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
                    alert("Nem jo");
                }
                //userId = ha ide beadod a bejelentkezett id-t elvileg menni fog a login teljesen
                // localStorage.setItem("userId", userId);
            }
            request.send(JSON.stringify(body));
        });
    }


   orderButton(){
      this.setState({
         redirect: true,
         link: 'order'
      });
   }

   render(){
      const link = "/" + this.state.link;
      if(this.state.redirect)
         return <Redirect to={link} />


      return (
         <div>
            <div className="quick-order" onClick={this.orderButton}>Order without login</div>
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
