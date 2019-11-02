import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Cards from '../components/cards'

const About = () => {
    return (
        <div>
            <Container>
                <h1 className="aboutCardH1">Cards with React-Bootstrap</h1>
                <Row style={{ justifyContent: 'space-around' }} mt={5}>
                    <Cards
                        title="Hello"
                        image="https://d.newsweek.com/en/full/520858/supermoon-moon-smartphone-photo-picture.webp?w=737&f=3af9241c96b2332570de554b21c624e8"
                        text="How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
                    />
                    <Cards
                        title="World"
                        image="https://media.gettyimages.com/photos/daisy-meadow-picture-id166017058?s=2048x2048"
                        text="How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
                    />
                    <Cards
                        title="Love"
                        image="https://thepreachersword.files.wordpress.com/2019/02/love..jpg"
                        text="How promotion excellent curiosity yet attempted happiness. Gay prosperous impression had conviction. For every delay death ask style. Me mean able my by in they. Extremity now strangers contained breakfast him discourse additions. Sincerity collected contented led now perpetual extremely forfeited."
                    />
                </Row>
            </Container>
        </div>
    )
}

export default About
