import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';
import Kodflix from './kodflix.jpg';
import Martini from './martini.png';
import Me from './Me.jpg';
import About from './About';

export default function Home() {
    return (
        <div>
            <Container>
                <h2>Home</h2>
                        <Row>
                            <Col xs={12} sm={8} className="main-section">
                                <p>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
                            </Col>
                            <Col xs={12} sm={4} className="sidebar-section">
                                <Link to="/About">
                                <Image src={Kodflix} roundedCircle className="project-pic" />
                                <Image src={Me} roundedCircle className="project-pic" />
                                <Image src={Kodflix} roundedCircle className="project-pic" />
                                </Link>
                                <p>I spend a lot of time walking around in the woods and talking to trees, and squirrels, and little rabbits and stuff. The secret to doing anything is believing that you can do it. Anything that you believe you can do strong enough, you can do. Anything. As long as you believe. Just go out and talk to a tree. Make friends with it. I guess that would be considered a UFO. A big cotton ball in the sky. Tree trunks grow however makes them happy. In nature, dead trees are just as normal as live trees.</p>
                            </Col>
                        </Row>
            </Container>
        </div>
    )
}