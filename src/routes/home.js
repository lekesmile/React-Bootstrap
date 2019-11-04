import React from 'react'
import Container from 'react-bootstrap/Container'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import Spinner from 'react-bootstrap/Spinner'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const home = () => {
    return (
        <div>
            <Container>
                <Jumbotron className="jum">
                    <h1>Something new ...</h1>
                    <p>
                        This is a simple hero unit, a simple jumbotron-style component for calling
                        extra attention to featured content or information.
                    </p>
                    <Row>
                        <p className="mt-5">
                            <Button variant="dark">Loading...</Button>
                        </p>
                        <Spinner className="mt-5 mx-3" animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </Row>
                </Jumbotron>
                <Container className="mt-5">
                    <Row>
                        <Col>
                            <h2 className="colh2">FAKTAT JA NÄKEMYS</h2>
                            <p>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan.</p>
                        </Col>
                        <Col>
                            <h2 className="colh2">KEHITTÄMINEN</h2>
                            <p>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan.</p>
                        </Col>
                        <Col>
                            <h2 className="colh2">VIESTINTÄ</h2>
                            <p>Lorem Ipsum on yksinkertaisesti testausteksti, jota tulostus- ja ladontateollisuudet käyttävät. Lorem Ipsum on ollut teollisuuden normaali testausteksti jo 1500-luvulta asti, jolloin tuntematon tulostaja otti kaljuunan ja sekoitti sen tehdäkseen esimerkkikirjan.</p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}

export default home
