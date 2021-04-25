import React from 'react'
import ActionButton from './ActionButton'

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
            link: ''
        };
    }
    /*
    componentDidMount() {
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
                                link: '/restaurant'
                            });
                            break;
                        case 2:
                            //Majd a fut�rhoz vigyen
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
                    alert("Nem j�");
                }
            }
            request.send(JSON.stringify(body));
        });
    }
    */
   render(){
      return (
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
      )
    }


}

export default LogInForm
