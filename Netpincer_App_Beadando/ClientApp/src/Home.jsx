import React from 'react'
import 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './components/Shop'
import LogInForm from './components/LogInForm'
import SignInForm from './components/SignInForm'
import Restaurant from './components/restaurant/Restaurant'
import Guest from './components/guest/Guest'

class Home extends React.Component {

   render(){
      return (
         <Router>
            <div className="home">
               <NavBar />
               <Switch>
                  <Route path="/" component={LogInForm} exact />
                  <Route path="/shop" component={Shop} />
                  <Route path="/signin" component={SignInForm} />
                  <Route path="/restaurant" component={Restaurant} />
                  <Route path="/guest" component={Guest} />
               </Switch>
            </div>
         </Router>
      )
  }
  // <Route path="/" exact component={Home} />
}

export default Home
