import React, { useState } from 'react'
import { Link, Redirect } from "react-router-dom"


export const Login = () => {

    const [inputValues, setInputValues] = useState({ login: "", passsword: "" })


    const [isLogged, setIsLogged] = useState(false)

    const creds = {
        login: "admin",
        passsword: "admin123"
    }


    const onLogin = () => {
        if (inputValues.login === creds.login && inputValues.passsword === creds.passsword) {
            setIsLogged(true)
        }
    }


    return isLogged ?
        <Redirect to="/todos" />
        : (<div style={styles.login}>
            <h1>Авторизация</h1>
            <input
                value={inputValues.login}
                style={styles.input}
                type="text"
                onChange={(e) => {
                    setInputValues({ ...inputValues, login: e.target.value })
                }} />

            <input
                value={inputValues.passsword}
                style={styles.input}
                type="text"
                onChange={(e) => {
                    setInputValues({ ...inputValues, passsword: e.target.value })
                }}
            />

            <Link to="/login">
               <button onClick={onLogin}>Войти</button>
            </Link>

           


        </div>
        )
}

const styles = {
    login: {
        width: "1000px",
        margin: "50px auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    },
    input: {
        margin: "10px 0"
    }
}