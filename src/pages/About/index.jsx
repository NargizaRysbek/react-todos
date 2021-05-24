import React, { useState } from 'react'
import { Link } from 'react-router-dom'
export const About = () => {
    
    return <div style={styles.login}>
        <h1>About</h1>
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