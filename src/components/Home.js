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


console.log(createTownslist( ["Sudak", "Yalta", "Kerch", "Feodosiya"], []));


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