import React from 'react';
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap/';
import './About.css';
import DrinkMeApp from './martini.png';
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
                    <h3>Kodflix</h3>
                    <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={Kodflix} roundedCircle className="About-project-pic" />
                    <h3>Kodflix</h3>
                    <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                </Col>
                <Col xs={12} sm={4} className="person-wrapper">
                    <Image src={Kodflix} roundedCircle className="About-project-pic" />
                    <h3>Kodflix</h3>
                    <p>That's a crooked tree. We'll send him to Washington. These little son of a guns hide in your brush and you just have to push them out.</p>
                </Col>
            </Row>
        </Container>
    )
}