import React from 'react';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js'
import Footer from './Footer.js'
import { Container } from 'react-bootstrap';

const About = () => {
    return(
        <div>
            <div className="page" >
                <Navbar /> 
                <Jumbotron title='About us' subtitle="Hello"/>
                <Container>
                    <p>In by an appetite no humoured returned informed. Possession so comparison inquietude he he conviction no decisively. Marianne jointure attended she hastened surprise but she. Ever lady son yet you very paid form away. He advantage of exquisite resolving if on tolerably. Become sister on in garden it barton waited on.</p>

                    <p>It prepare is ye nothing blushes up brought. Or as gravity pasture limited evening on. Wicket around beauty say she. Frankness resembled say not new smallness you discovery. Noisier ferrars yet shyness weather ten colonel. Too him himself engaged husband pursuit musical. Man age but him determine consisted therefore. Dinner to beyond regret wished an branch he. Remain bed but expect suffer little repair.</p>
                </Container>
                <Footer />
            </div>
        </div>
    )
}

export default About 