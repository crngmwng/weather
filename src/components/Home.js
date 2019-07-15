import React from 'react';
import Navbar from './Navbar.js';
import Jumbotroon from './Jumbotron.js'
import './Home.css'
import Footer from './Footer.js'
import Townslist from './Townslist.js';
import { Container } from 'react-bootstrap';


const towns = [
    {
        "id": 1,
        "title": "town1", 
        "temperature": "20°C",
        "wind": "no wind" ,
        "clouds": "no clouds"
    },
    {
        "id": 2,
        "title": "town2", 
        "temperature": "22°C",
        "wind": "no wind",
        "clouds":"no clouds"
    },
    {
        "id": 3,
        "title": "town3", 
        "temperature": "20°C",
        "wind": "no wind",
        "clouds": "no clouds"
    },
    {
        "id": 4,
        "title": "town4", 
        "temperature": "25°C",
        "wind": "no wind",
        "clouds": "no clouds"
    }
]

const Home = () => {
    return(
        <div className="homepage">
            <Navbar /> 
            <Jumbotroon title='Welcome' subtitle="Hello"/>

            <div className="home-container">
                <Container>
                    <Townslist towns={towns} />
                </Container>
            </div>  

            <Footer />
        </div>
    )
}

export default Home