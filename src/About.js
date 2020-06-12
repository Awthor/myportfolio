import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap/';
import './About.css';
import DrinkMeApp from './martini.png';
import Martini from './martini.png';
import Me from './Me.jpg';
import Kodflix from './kodflix.jpg'

export default function Home() {
    return (
        <Container>
            <Jumbotron>
                <h2>Welcome to My Portfolio</h2>
                <p>Build with React, JavaScript, CSS, React-Bootstrap, Bootstrap & HTML</p>
                <Link to="/contact">
                    <Button bsStyle="primary">Contact Me</Button>
                </Link>
            </Jumbotron>
            <Row className="show-grid text-center">
            <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={Kodflix} roundedCircle className="About-project-pic" />
                    <h3>Kodflix<!/h3>
                    <p>Kodflix is a Netflix clone and this was my first ever project, that was built out using:
                        <li> React</li>
                        <li> JavaScript</li>
                        <li> ES6+</li>
                        <li> HTML5</li>
                        <li> CSS3</li>
                        <li> Node & Express</li> 
                        I used modern features such as Grid (CSS) and stateless components (React Hooks).</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={Me} roundedCircle className="About-project-pic" />   
                    <h3>DrinkMeApp</h3>
                    <p>DrinkMeApp is a Team Application which is... that was built out using:
                        <li> React,</li>
                        <li> JavaScript</li>
                        <li> ES6+</li>
                        <li> HTML5</li>
                        <li> CSS3</li>
                        <li> Node & Express</li> 
                        I used modern features such as Grid (CSS) and stateless components (React Hooks).</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={Kodflix} roundedCircle className="About-project-pic" />
                    <h3>Kodflix</h3>
                    <p>Kodflix is a Netflix clone and this was my first ever project, that was built out using:
                        <li> React</li>
                        <li> JavaScript</li>
                        <li> ES6+</li>
                        <li> HTML5</li>
                        <li> CSS3</li>
                        <li> Node & Express</li> 
                        I used modern features such as Grid (CSS) and stateless components (React Hooks).</p>
                </Col>
            </Row>
        </Container>
    )
}