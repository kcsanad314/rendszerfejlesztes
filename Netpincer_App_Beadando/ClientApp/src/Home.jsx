import React from 'react'
import 'react-router-dom'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import NavBar from './components/NavBar'
import Shop from './components/Shop'
import LogInForm from './components/LogInForm'
import SignUpForm from './components/SignUpForm'
import Restaurant from './components/restaurant/Restaurant'
import Guest from './components/guest/Guest'
import Checkout from './components/guest/Checkout'

class Home extends React.Component {

   render(){
      return (
         <Router>
            <div className="home">
               <NavBar />
               <Switch>
                  <Route path="/" component={LogInForm} exact />
                  <Route path="/shop" component={Shop} />
                  <Route path="/signup" component={SignUpForm} />
                  <Route path="/restaurant" component={Restaurant} />
                  <Route path="/guest" component={Guest} />
                  <Route path="/checkout" component={Checkout} />
               </Switch>
            </div>
         </Router>
      )
  }
}

export default Home
