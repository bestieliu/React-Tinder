import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from './TinderCards';
import Header from './Header';
import './App.css';


function App() {
  return (
    <div className="App">   

      <Header/>
        <Router>
          <Switch>
            <Route path="/chat">
              <h1>Hello world</h1>
            </Route>

          <Route path="/">
              <h1>Hello world</h1>
          </Route>

          </Switch>
      </Router>  

      <TinderCards/>


    </div>
  );
}

export default App;
