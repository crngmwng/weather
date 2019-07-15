import React from 'react';
import './Jumbotron.css';
import { Container, Jumbotron } from 'react-bootstrap';

const Jumbotroon = (props) => {
        return(
            <Jumbotron fluid={true}>
                <Container>
                    <h1 className='display-5'>{props.title}</h1>
                    <p className='lead'>{props.subtitle}</p>
                </Container>
            </Jumbotron>
        );
    }

export default Jumbotroon