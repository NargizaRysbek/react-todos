import {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import { Todos } from './pages/Todos';
import { Login } from './pages/Login';
import { Home } from './pages/Home';


export const App = () => {

  return (
    <Router>
      <Switch>
        <Route path="/todos" component={Todos}/>
        <Route path="/login" component={Login}/>
        <Route path="/" component={Home}/>
      </Switch>
    </Router> 
  );
}

