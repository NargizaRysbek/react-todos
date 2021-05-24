import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const Contacts = () => {

    return <div style={styles.login}>
        <h1>Contacts:</h1>
        <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
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