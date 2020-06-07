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
                <h1>Welcome</h1>
                <p>Check me out yey</p>
            </Container>
        </Jumbo>
    </Styles >
        )
}
