import React from 'react';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js'
import './Home.css'
import Footer from './Footer.js'
import Townslist from './Townslist.js';
import { Container } from 'react-bootstrap';
import { arrayExpression } from '@babel/types';


// const towns = [
//     {
//         "id": 1,
//         "title": "town1", 
//         "temperature": "20°C",
//         "wind": "no wind" ,
//         "clouds": "no clouds"
//     },
//     {
//         "id": 2,
//         "title": "town2", 
//         "temperature": "22°C",
//         "wind": "no wind",
//         "clouds":"no clouds"
//     },
//     {
//         "id": 3,
//         "title": "town3", 
//         "temperature": "20°C",
//         "wind": "no wind",
//         "clouds": "no clouds"
//     },
//     {
//         "id": 4,
//         "title": "town4", 
//         "temperature": "25°C",
//         "wind": "no wind",
//         "clouds": "no clouds"
//     }
// ]


let towns = ["Sudak", "Yalta", "Kerch", "Feodosiya"];
let townslist = [];

towns.map(town => {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
    .then(res => res.json())
    .then(json => townslist.push(json.data));
    }
)

console.log(townslist[0][0])

// Uncaught TypeError: Cannot read property '0' of undefined

// []
// 0: Array(1)
// 0: {rh: 62, pod: "d", lon: 34.97471, pres: 1009.44, timezone: "Europe/Simferopol", …}
// length: 1
// __proto__: Array(0)
// 1: Array(1)
// 0: {rh: 44, pod: "d", lon: 37.27365, pres: 1008, timezone: "Europe/Kiev", …}
// length: 1
// __proto__: Array(0)
// 2: Array(1)
// 0: {rh: 41, pod: "d", lon: 36.47429, pres: 1003.55, timezone: "Europe/Simferopol", …}
// length: 1
// __proto__: Array(0)
// 3: Array(1)
// 0: {rh: 60, pod: "d", lon: 35.37789, pres: 1000.53, timezone: "Europe/Simferopol", …}
// length: 1
// __proto__: Array(0)
// length: 4
// __proto__: Array(0)

console.log(Object.keys(townslist));

// []
// length: 0
// __proto__: Array(0)


const Home = () => {
    return(
            <div className="page">
                <Navbar /> 
                <Jumbotron title='Welcome' subtitle="Hello"/>

                <div className="home-container">
                    <Container>
                        <Townslist townslist={townslist} towns={towns} />
                    </Container>
                </div>  
                    <Footer />
            </div>
    )
}

export default Home