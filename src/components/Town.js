import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Town.css'

const Town = (props) => {
    return (
            <div className="list" ><Link to={`/${props.title}`}>{props.title} </Link>
                <div className="row block align-items-center"> 
                    <Col>{props.temperature}</Col>
                </div>
                <div className="row block align-items-center"> 
                    <Col>{props.wind}</Col>
                </div>
                <div className="row block align-items-center"> 
                    <Col>{props.clouds}</Col>
                </div>
            </div>
    )
}

export default Town