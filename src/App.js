import {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";
import {Home} from './pages/Home'
import { Contacts } from './pages/Contacts'
import { About } from './pages/About'
import { Auth } from './pages/Auth';
import { Employees } from './pages/Employees'
import {Login} from './pages/Login'
import { Todos } from './pages/Todos'
import { TodoItem } from "./components/TodoItem";


export const App = () => {

  const pages = [
        {
          route: "/auth",
          name: "Авторизация",
          component: Auth
        },
        {
        route: "/contacts",
        name: "Контакты",
        
        component: Contacts
        },
        {
        route: "/about",
        name: "О нас",
        
        component: About
        },
        {
        route: "/employees",
        name: "Сотрудники",
        
        component: Employees
        },
        {
          route: "/todos",
          name: "Todos",
          
          component: Todos
          },
          {
            route: "/login",
            name: "Auth",
            component: Login
          },
        {
          route: "/",
          name: "Главная",
          component: Home
        },
        
        
    ]
  return (
    <Router>
      <Switch>

        {
            pages.map((el, id) => {
              return <Route path={el.route} component={el.component} key={id}/>
            })
        }
        {/* <Route path="/todos" component={Todos}/>
        <Route path="/login" component={Login}/>
        <Route path="/auth" component={Auth}/> */}
      </Switch>
    </Router> 
  );
}

