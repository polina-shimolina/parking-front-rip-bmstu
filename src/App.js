import React from "react";
import {Link} from "react-router-dom";


const About = () => {
    return (
        <div>
            <div><Link to='/'>Главная</Link> / <Link to="/about">О сервисе</Link>
                <p></p></div>
            <h2>О сервисе</h2>
            <p></p>
            <div><p>Инфо о сервисе</p>
                <p>Еще инфо о сервисе</p></div>
        </div>
    )
}


export default About
