import React from 'react';
import { Jumbotron as Jumbo, Container } from 'react-bootstrap';
import styled from 'styled-components';
import Balloon from '../Assets/Ballon.jpg';
import './Jumbotron.css'

const Styles = styled.div`
    .jumbo {
        background url(${Balloon}) no-repeat fixed bottom;
        background-size: cover;
    }
    `;

export default function Jumbotron() {
    return (
    <Styles>
        <Jumbo fluid className="jumbo">
            <div className="overlay"></div>
            <Container>
                <h1>Welcome to My portfolio</h1>
                <p>A Recruiter by day, coder by night, I shall run the rooftops of London and fight crime with all my MIGHT!</p>
            </Container>
        </Jumbo>
    </Styles >
        )
}
