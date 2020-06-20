import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';
import Kodflix from '../About/kodflix.jpg';
import Me from '../About/Me.jpg';
import DrinkMeApp from '../About/DrinkMeApp.png';

export default function Home() {
    return (
        <div>
            <Container >
                <h2>Home</h2>
                <Row>
                    <Col xs={12} sm={8} className="main-section">
                    <p>
                                As Associate Director for WSS, I joined to set up and run the WSS PropTech Software & Engineering practice. 
                                With a background in software development and over six years in technology recruitment I have assisted start-up, 
                                SME’s and Global organisations with planning, attracting talent and building their software development teams.
                            </p>
                            <p>
                                WHAT IS PROPTECH? 
                                 <br></br>
                                Very simply it is Technology within the Real Estate/Property industry.
                            </p>
                                My goal is to become synonymous within the PropTech market helping Real Estate companies shape and grow their technology teams.
                    </Col>
                    <Col className="sidebar-section">
                        <Link to="/About">
                            <Image src={Kodflix} thumbnail  className="project-pic" />
                            <Image src={DrinkMeApp} thumbnail  className="project-pic" />
                            <Image src={Me} thumbnail  className="project-pic" />
                        </Link>
                        <p>     Synopsis of projects here - As Associate Director for WSS, I joined to set up and run the WSS PropTech Software & Engineering practice. 
                                With a background in software development and over six years in technology recruitment I have assisted start-up, 
                                SME’s and Global organisations with planning, attracting talent and building their software development teams.
                            </p>
                            <p>
                                WHAT IS PROPTECH? 
                                 <br></br>
                                Very simply it is Technology within the Real Estate/Property industry.
                            </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}