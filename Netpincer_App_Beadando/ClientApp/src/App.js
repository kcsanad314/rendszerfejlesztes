import React from 'react'
import './App.css'
import Home from './Home'


class App extends React.Component {

   render(){
      return (
         <div className="App">
            <Home />
         </div>
      )
  }
  // <Route path="/" exact component={Home} />
}

export default App
