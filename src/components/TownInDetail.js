import React from 'react';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js'
import './Home.css'
import Footer from './Footer.js'
import { Container } from 'react-bootstrap';
import WeatherIn7Days from './WeatherIn7Days.js'



const TownInDetail = () => {
    return(
        <div className="page">
            <Navbar /> 
            <Jumbotron title='Welcome' subtitle="Hello"/>
                <WeatherIn7Days/>
            <Footer />
        </div>
    );
}

export default TownInDetail