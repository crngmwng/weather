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
        // console.log(this.state.townslist)
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