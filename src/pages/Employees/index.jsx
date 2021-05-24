import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const Employees = () => {

    const data = [
        {
            name: "Джонни Депп",
            img: "https://cinewest.ru/wp-content/uploads/2014/06/dzhonni-depp-Copy.jpg"
        },
        {
            name: "Тони Старк",
            img: "https://i.timeout.ru/pix/resize/496/654/750x485.png"
        },
        {
            name: "Анджелина Джоли",
            img: "https://smartwomens.ru/wp-content/uploads/2017/08/Andzhelina-Dzholi-e1503847384791.jpg"
        },
        {
            name: "Кристиан бейл",
            img: "https://i.timeout.ru/pix/resize/496/644/750x485.png"
        },
        {
            name: "Леонардо ди Каприо",
            img: "https://i.travel.ru/images2/2017/09/object259807/dicaprio.jpg"
        },
    ]
    return <div style={styles.login}>
        <h1>Employees:</h1>
        <ul style={{ display: "flex", flexFlow: "row wrap", justifyContent: "space-around" }}>
            {data.map((el, id) => {
                return <li key={id}>
                    <h4>{el.name}</h4>
                    <img style={{ width: "250px" }} src={el.img} alt="" />
                </li>
            })}
        </ul>
        <Link to="/"><button>Home</button></Link>
    </div>
}
const styles = {
    login: {
        width: "1000px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}