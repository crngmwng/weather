import { Component } from 'react';
import React from 'react';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js'
import './Home.css'
import Footer from './Footer.js'
import Townslist from './Townslist.js';
import { Container } from 'react-bootstrap';
import { arrayExpression } from '@babel/types';


class Home extends Component  {

    constructor(props) {
        super(props)
        this.state = {
            towns: ["Sudak", "Yalta", "Kerch", "Feodosiya"],
            townslist: []
        }
    } 

    componentDidMount() {

        function func(data) {
            let list = [];
            list.push(data);
            return list
        }
        
        async function delayedLog(item) {
            let res = await fetch(`https://api.weatherbit.io/v2.0/current?city=${item}&key=ced73555abfb464ebcb5d7e77f5be270`);
            let json = await res.json();
            let data = await json.data[0];
            await func(data);
        }
        async function processArray(array) {
            for (const item of array) {
              await delayedLog(item);
            }
        }
          
        processArray(this.state.towns)



        // async function createTownslist(arr = []) {
        //     for (const town of arr) {
        //         let res = await fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`);
        //         let json = await res.json();
        //         let data = await json.data[0];
        //         return data
        //         }
        // }

        // async function main() {
        //     let town = await createTownslist(towns);
        //     console.log(town)
        // }

        // main()


        // let a = [];
        // this.state.towns.map(town => {
        //     fetch(`https://api.weatherbit.io/v2.0/current?city=${town}&key=ced73555abfb464ebcb5d7e77f5be270`)
        //     .then(res => res.json())
        //     .then(json => a.push(json.data[0]))
        //     }
        // )
        
        // console.log(a);
        // this.setState({
        //     townslist: a
        // });
        // console.log(this.state)
    }


    render() {
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