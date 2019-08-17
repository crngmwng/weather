import { Component } from 'react';
import React from 'react';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js'
import './Home.css'
import Footer from './Footer.js'
import Townslist from './Townslist.js';
import { Container } from 'react-bootstrap';
import { arrayExpression } from '@babel/types';


class Home extends Component{ 
    constructor(props) {
        super(props)
        this.state = {
            towns: ["Sudak", "Yalta", "Kerch", "Feodosiya"],
            townslist: []
        }
    }

    componentDidMount() {

        this.state.towns.map(town => fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
        .then(res => res.json())
        .then(json => this.setState({...this.state,
                                    townslist: json.data[0]})
            )
        )
    }

    render() {
        console.log(this.state.townslist)

        // []
        // length: 0
        // __proto__: Array(0)
        
        // {rh: 42, pod: "d", lon: 34.97471, pres: 1010.51, timezone: "Europe/Simferopol", …}
        // {rh: 67, pod: "d", lon: 36.47429, pres: 1004.75, timezone: "Europe/Simferopol", …}
        // {rh: 70, pod: "d", lon: 37.27365, pres: 1007.41, timezone: "Europe/Kiev", …}
        // {rh: 48, pod: "d", lon: 35.37789, pres: 1001.88, timezone: "Europe/Simferopol", …}


        return(
                <div className="page">
                    <Navbar /> 
                    <Jumbotron title='Welcome' subtitle="Hello"/>

                    <div className="home-container">
                        <Container>
                            <Townslist townslist={this.state.townslist}/>
                        </Container>
                    </div>  
                        <Footer />
                </div>
        )
    }
}
export default Home