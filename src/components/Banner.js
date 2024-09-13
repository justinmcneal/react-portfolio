import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import astronaut from "../assets/img/astronaut.svg"
import { useState, useEffect } from 'react';

export const Banner = () => {
    const toRotate = ["Web Developer", "Mobile Developer", "UI/UX Designer"]
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}> 
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1> {'Hi, I am Justin Mc Neal'} </h1>
                        <div className="wrap"> <h2>IT Student</h2> </div>
                        <p>“Sorry, Amanai. I’m not even angry over you right now. I bear no grudge against anyone. 
                            It’s just that the world feels so, so wonderful right now. Throughout Heaven and Earth, 
                            I alone am the honored one.”</p>
                        <Button onClick={() => console.log('connect')}>Let's Connect</Button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                    <img src={astronaut} alt="Header Img">
                    </img>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};