import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Town.css'

const Town = (props) => {
    console.log(props)
    return (
            <div className="list" ><Link to={`/${props.title}`}>{props.title} </Link>
                <div className="row block align-items-center"> 
                    <Col>{props.app_temp}</Col>
                </div>
                <div className="row block align-items-center"> 
                    <Col>{props.data.wind_spd}</Col>
                </div>
                <div className="row block align-items-center"> 
                    <Col>{props.data.clouds}</Col>
                </div>
            </div>
    )
}


// GET https://api.weatherbit.io/v2.0/current?city=Sudak&key=ced73555abfb464ebcb5d7e77f5be270 net::ERR_NAME_NOT_RESOLVED
// (anonymous) @ Home.js:47
// ./src/components/Home.js @ Home.js:46
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/App.js @ App.css?4433:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/index.js @ index.css?f3f6:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// 0 @ serviceWorker.js:135
// __webpack_require__ @ bootstrap:781
// checkDeferredModules @ bootstrap:45
// webpackJsonpCallback @ bootstrap:32
// (anonymous) @ main.chunk.js:1
// :3000/#/:1 Uncaught (in promise) TypeError: Failed to fetch
// Promise.then (async)
// (anonymous) @ Home.js:47
// ./src/components/Home.js @ Home.js:46
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/App.js @ App.css?4433:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/index.js @ index.css?f3f6:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// 0 @ serviceWorker.js:135
// __webpack_require__ @ bootstrap:781
// checkDeferredModules @ bootstrap:45
// webpackJsonpCallback @ bootstrap:32
// (anonymous) @ main.chunk.js:1
// Home.js:47 GET https://api.weatherbit.io/v2.0/current?city=Feodosiya&key=ced73555abfb464ebcb5d7e77f5be270 net::ERR_NAME_NOT_RESOLVED
// (anonymous) @ Home.js:47
// ./src/components/Home.js @ Home.js:46
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/App.js @ App.css?4433:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/index.js @ index.css?f3f6:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// 0 @ serviceWorker.js:135
// __webpack_require__ @ bootstrap:781
// checkDeferredModules @ bootstrap:45
// webpackJsonpCallback @ bootstrap:32
// (anonymous) @ main.chunk.js:1
// Home.js:47 GET https://api.weatherbit.io/v2.0/current?city=Kerch&key=ced73555abfb464ebcb5d7e77f5be270 net::ERR_NAME_NOT_RESOLVED
// (anonymous) @ Home.js:47
// ./src/components/Home.js @ Home.js:46
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/App.js @ App.css?4433:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/index.js @ index.css?f3f6:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// 0 @ serviceWorker.js:135
// __webpack_require__ @ bootstrap:781
// checkDeferredModules @ bootstrap:45
// webpackJsonpCallback @ bootstrap:32
// (anonymous) @ main.chunk.js:1
// Home.js:47 GET https://api.weatherbit.io/v2.0/current?city=Yalta&key=ced73555abfb464ebcb5d7e77f5be270 net::ERR_NAME_NOT_RESOLVED
// (anonymous) @ Home.js:47
// ./src/components/Home.js @ Home.js:46
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/App.js @ App.css?4433:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// ./src/index.js @ index.css?f3f6:45
// __webpack_require__ @ bootstrap:781
// fn @ bootstrap:149
// 0 @ serviceWorker.js:135
// __webpack_require__ @ bootstrap:781
// checkDeferredModules @ bootstrap:45
// webpackJsonpCallback @ bootstrap:32
// (anonymous) @ main.chunk.js:1
// 3:3000/#/:1 Uncaught (in promise) TypeError: Failed to fetch

export default Town