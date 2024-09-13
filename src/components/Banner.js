    import { useState, useEffect } from "react";
    import { Container, Row, Col } from "react-bootstrap";
    import gojoo from "../assets/img/gojoo.png";
    import { ArrowRightCircle } from 'react-bootstrap-icons';
    import 'animate.css';
    import TrackVisibility from 'react-on-screen';

    export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const toRotate = [ " Web Developer", " Web Designer", " UI/UX Designer", " Android Developer"];
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
        tick();
        }, delta);

        return () => { clearInterval(ticker) };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

        setText(updatedText);

        if (isDeleting) {
        // Increase the speed of deletion by making delta faster
        setDelta(50); // You can adjust this value to control the deletion speed
        }

        if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
        } else if (isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(200); // Reset speed for typing
        }
    }

    return (
        <section className="banner" id="home">
        <Container>
            <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
                <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline">Welcome Kapatid.</span>
                    <h1>{`Kamusta! Ako si Justin`} 
                        <span className="txt-rotate" dataPeriod="1000" data-rotate='[ " Web Developer", " UI/UX Designer", " Android Developer" ]'>
                            <span className="wrap">{text}</span>
                        </span>
                    </h1>
                    <p>Patawad umanai subalit di lamang ako nagagalit Sayo Ngayon Wala ako tinatanim na Galit sa kung kaninyo man Ngayon lang kasi parang napaka ganda ng mundu Mula sa langit at lupa ako pinangaralan</p>
                    <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                </div>}
                </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
                <TrackVisibility>
                {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={gojoo} alt="Header Img"/>
                    </div>}
                </TrackVisibility>
            </Col>
            </Row>
        </Container>
        </section>
    );
    }
