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

    
    function createTownslist() {
    var towns = ["Sudak", "Yalta", "Kerch", "Feodosiya"];
    var townslist = {};
        towns.forEach(town => {
            fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
            .then(res => res.json())
            .then(json => townslist[town] = json.data[0])
            }
        )
        return townslist;
    }
    
    console.log(createTownslist());
    console.log(Object.keys(createTownslist()));

//     {}
//      Feodosiya: {rh: 45, pod: "d", lon: 35.37789, pres: 1008.48, timezone: "Europe/Simferopol", …}
//      Kerch: {rh: 49, pod: "d", lon: 36.47429, pres: 1011.7, timezone: "Europe/Simferopol", …}
//      Sudak: {rh: 42, pod: "d", lon: 34.97471, pres: 1017.46, timezone: "Europe/Simferopol", …}
//      Yalta: {rh: 46, pod: "d", lon: 37.27365, pres: 1016.05, timezone: "Europe/Kiev", …}
//      __proto__: Object


//      Array(0)
//      length: 0
//      __proto__: Array(0)



    return(
            <div className="page">
                <Navbar /> 
                <Jumbotron title='Welcome' subtitle="Hello"/>

                <div className="home-container">
                    <Container>
                        <Townslist townslist={createTownslist(["Sudak", "Yalta", "Kerch", "Feodosiya"], [])} towns={["Sudak", "Yalta", "Kerch", "Feodosiya"]} />
                    </Container>
                </div>  
                    <Footer />
            </div>
    )
}

export default Home