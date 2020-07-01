import React from 'react';
import { Container, Row, Col, Image, Card, CardColumns, Jumbotron, Button } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Home.css';
import Kodflix from '../About/kodflix.jpg';
import Me from '../About/Me.jpg';
import DrinkMeApp from '../About/DrinkMeApp.png';
import SocialMedia from './SocialMedia'


export default function Home() {
    return (
        <div>
            <Container >
                <h2>This Page is Under Constuction</h2>
                <Row>
                    <Col xs={12} sm={12} className="main-section">
                        <Jumbotron>
                            <h2>Welcome to My Portfolio</h2>
                            <p>Built with React, JavaScript, CSS, HTML and React-BootStrap</p>
                            <Link to="/contact">
                                <Button bsStyle="primary">Contact Me</Button>
                            </Link>
                        </Jumbotron>
                        <CardColumns>
                            <Card border="secondary">
                                <Card.Img variant="top" src={Kodflix} />
                                <Card.Body>
                                    <Card.Title>Kodflix Project</Card.Title>
                                    <Card.Text>
                                        Kodflix is a Netflix clone and this was my first ever project, that was built out using:
                                        React, JavaScript, ES6+, HTML5, CSS3, NodeJS & ExpressJS
                        </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="secondary" className="p-3">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p>
                                        Aaron is an excellent IT recruitment consultant who I have recently work with.
                                        Aaron has excellent technical knowledge in the areas of his work, very transparent, friendly, dedicated, mindful and professional.
                            </p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Mrinal Das <cite title="Source Title"> .NET Developer - Kantar Worldpanel</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                            <Card border="secondary" >
                                <Card.Body>
                                    <Card.Text>
                                        I have worked with Aaron both as a hiring manager and as a candidate and I must say it is very rare to find such a detail-focused,
                                        no-nonsense, sharp recruiter in the business nowadays. Aaron has an extensive network of connections that he curates carefully and
                                        therefore he can leverage this pre-emptively as soon as a client's or candidate's need arises.
                        </Card.Text>
                                    <Card.Text>
                                        <small className="text-muted">Alfonso Ferrandez - CTO | Adviser | Mentor | Founder | Lecturer</small>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="secondary" >
                                <Card.Img variant="top" src={Me} />
                                <Card.Body>
                                    <Card.Title>Who am I?</Card.Title>
                                    <Card.Text>
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
                                My goal is to become synonymous within the PropTech market helping Real Estate companies shape and grow their technology teams.{' '}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="secondary">
                                <Card.Img variant="top" src={DrinkMeApp} />
                                <Card.Body>
                                    <Card.Title>DrinkMeApp</Card.Title>
                                    <Card.Text>
                                        <p>
                                            A team project application build in ReactJS and using public API's.
                                            The user can choose throughout the list a drink and redirect to the recipe page or
                                            click the random button and get a random drink.
                            </p>
                                        <p>
                                            This application was built using React, (Hooks, Components, Props,
                                            Functions),
                                            JavaScript, ES6+, HTML5, CSS3 and 3rd party API's
                            </p>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                            <Card border="secondary" className="text-left">
                                <blockquote className="blockquote mb-0 card-body">
                                    <p>
                                        Aaron has helped me fill a number of roles over the past couple of years.
                                        Not only has he done a great job finding candidates,
                                        but he’s also been a pleasure to work with – understanding the technology,
                                        time constraints, and being proactive in getting any issues resolved.
                        </p>
                                    <footer className="blockquote-footer">
                                        <small className="text-muted">
                                            Nathen Yendell<cite title="Source Title"> Head of Development - McLaren F1 Racing</cite>
                                        </small>
                                    </footer>
                                </blockquote>
                            </Card>
                        </CardColumns>
                    </Col>
                    <Col>
                    
                    </Col>
                </Row>
            </Container>
        </div>
    )
}