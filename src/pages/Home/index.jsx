import React from 'react'
import { Link } from 'react-router-dom'
import { Contacts } from '../Contacts'
import { About } from '../About'
import { Employees } from '../Employees'
import {Auth} from '../Auth'

export const Home = () => {

    const pages = [
        {
            route: "/",
            name: "Главная",
            component: Home
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
            route: "/auth",
            name: "Авторизация",

            component: Auth
        },
    ]

return <div style={styles.main}>
    <h1>Добро пожаловать</h1>
    {pages.map((el, id) => {
        return <Link key={id} to={el.route}><button>{el.name}</button>
        </Link>
    })}

    <Link to="/todos"><button>Todos</button>
    </Link>
    </div>
}

const styles = {
    main: {
        width: "1000px",
        margin: "0 auto",
        display: "flex",
        justifyContent: "center",
        flexDirection: "column",
        alignItems: "center"
    }
}