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
let townslist = new Object();

towns.map( town => {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
    .then(res => res.json())
    .then(json => townslist[town] = json);
    }
);

console.log(townslist)

console.log(townslist.Feodosiya);
console.log(townslist['Feodosiya']);

// Feodosiya:
// count: 1
// data: [{…}]
// __proto__: Object
// Kerch:
// count: 1
// data: [{…}]
// __proto__: Object
// Sudak:
// count: 1
// data: [{…}]
// __proto__: Object
// Yalta:
// count: 1
// data: [{…}]
// __proto__: Object
// __proto__: Object


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