import React from 'react'
import { Col } from 'react-bootstrap';

const Info = (props) => {
    return(
        <div>
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
    );
}

export default Info 