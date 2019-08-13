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

    
    // function createTownslist() {
    // let towns = ["Sudak", "Yalta", "Kerch", "Feodosiya"];
    // let townslist = {};
    //     towns.forEach(town => {
    //         fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
    //         .then(res => res.json())
    //         .then(json => townslist[town] = json.data[0])
    //         }
    //     )
    //     return townslist;
    // }
    
    // console.log(createTownslist());


    function createTownslist() {
        let towns = ["Sudak", "Yalta", "Kerch", "Feodosiya"];
        return Promise.all(
          towns.map(town => fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
            .then(res => res.json())
            .then(json => json.data))
        )
          .then(response => {
            return towns.reduce((acc, town, i) => {
              acc[town] = response[i]
              return acc
            }, {})
          })
      }
      
      createTownslist().then(towns => console.log(Object.keys(towns), towns));
      
      (async function () {
        const towns = await createTownslist()
        console.log(Object.keys(towns), towns)
      })()


    //   Array(4)
    //   0: "Sudak"
    //   1: "Yalta"
    //   2: "Kerch"
    //   3: "Feodosiya"
    //   length: 4
    //   __proto__: Array(0)
// 
// 
    //   Object
        // Feodosiya: [{…}]
        // Kerch: [{…}]
        // Sudak: [{…}]
        // Yalta: [{…}]
        // __proto__: Object

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