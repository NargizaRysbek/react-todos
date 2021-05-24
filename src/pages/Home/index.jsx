import React from 'react'
import { Link } from "react-router-dom"


export const Home = () => {


    return (
        <div style={styles.main}>
            <h1>Добро Пожаловать</h1>
            <Link to="/login">
                <button>Войти</button>
            </Link>
        </div>
    )
}

const styles = {
    main: {
        width: '1000px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
        alignItems: 'center'
    }
}