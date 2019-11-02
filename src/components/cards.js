import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'

export default class cards extends Component {
    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }} >
                    <Card.Img variant="top" src={this.props.image} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text> {this.props.text}</Card.Text>
                        <Button variant="primary">Read more..</Button>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}
