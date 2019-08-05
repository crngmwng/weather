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

const Home = () => {

    
    const createTownslist = () => {
    var towns = ["Sudak", "Yalta", "Kerch", "Feodosiya"];
    var townslist = [];
    towns.map( (town) => {
        fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
        .then(res => res.json())
        .then(json => pushToArr(json.data, townslist))
        return townslist;
        }
    )
}


const pushToArr = (townslist, data) => {
    townslist.push(data);
}


console.log(createTownslist(towns, townslist));

// Line 63:  'towns' is not defined      no-undef
// Line 63:  'townslist' is not defined  no-undef
// Line 91:  'towns' is not defined      no-undef
// Line 91:  'townslist' is not defined  no-undef

// 0: Array(1)
// 0: {rh: 63, pod: "n", lon: 34.97471, pres: 1007.82, timezone: "Europe/Simferopol", …}
// length: 1
// __proto__: Array(0)
// 1: Array(1)
// 0: {rh: 52, pod: "d", lon: 37.27365, pres: 1009.39, timezone: "Europe/Kiev", …}
// length: 1
// __proto__: Array(0)
// 2: Array(1)
// 0: {rh: 39, pod: "d", lon: 36.47429, pres: 1006.21, timezone: "Europe/Simferopol", …}
// length: 1
// __proto__: Array(0)
// 3: Array(1)
// 0: {rh: 33, pod: "d", lon: 35.37789, pres: 1002.99, timezone: "Europe/Simferopol", …}
// length: 1
// __proto__: Array(0)
// length: 4
// __proto__: Array(0)

    return(
            <div className="page">
                <Navbar /> 
                <Jumbotron title='Welcome' subtitle="Hello"/>

                <div className="home-container">
                    <Container>
                        <Townslist townslist={createTownslist(towns, townslist)} towns={towns} />
                    </Container>
                </div>  
                    <Footer />
            </div>
    )
}

export default Home