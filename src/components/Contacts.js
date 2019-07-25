import React from 'react';
import Navbar from './Navbar.js';
import Jumbotron from './Jumbotron.js'
import Footer from './Footer.js'
import { Container } from 'react-bootstrap';
import "./Contacts.css"

const Contacts = () => {
    return(
        <div>
            <div className="page" >
                <Navbar /> 
                <Jumbotron title='Contact us' subtitle="Hello"/>
                    <Container>
                        <div className="d-flex">
                            <div className="contact-form">
                            <h4>Get in Touch</h4>
                            <p>Please fill out the quick form and we will be in touch with lightning speed.</p>

                                <input type="email" class="form-control" id="email" placeholder="Email address"/>

                                <input type="password" class="form-control" id="pwd" placeholder="Password"/>

                                <textarea placeholder="Message" class="form-control"/>

                                <button type="submit" class="btn btn-outline-dark">Submit</button>
                            </div>

                            <div className="connect-with-us">
                                <h4>Connect with us</h4>
                                <p>For support or any questions: <br></br>Email us at <a href="#" target="blank">support@weather.com</a> </p>
                            </div>
                        </div>
                    </Container>
                <Footer />
            </div>
        </div>
    )
}

export default Contacts 