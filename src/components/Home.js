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

    let towns = ["Sudak", "Yalta", "Kerch", "Feodosiya"];
    let townslist = [];

towns.map( town => {
    fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
    .then(res => pushToArr(res.json()))
    }
)


const pushToArr = (data) => {
    townslist.push(data);
}

// 0: Promise
// __proto__: Promise
// [[PromiseStatus]]: "resolved"
// [[PromiseValue]]: Object
// count: 1
// data: [{…}]
// __proto__: Object

    console.log(townslist)

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