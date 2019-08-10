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
            .then(json => pushToArr( townslist, json.data))
        }
        )
        return townslist;
    }


    const pushToArr = (townslist, data) => {
        townslist.push(data);
    }


    console.log(createTownslist());

    // Array(4)
    // 0: Array(1)
    // 0: {rh: 60, pod: "d", lon: 37.27365, pres: 1010.01, timezone: "Europe/Kiev", …}
    // length: 1
    // __proto__: Array(0)

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