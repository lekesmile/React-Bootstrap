import React, { Component } from 'react'
import Table from 'react-bootstrap/Table'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'

const clientsFromDb = [
    { 'id': 1, 'firstname': 'Jussi', 'lastname': 'Mikkelson', 'osoite': 'Freemantie 10' },
    { 'id': 2, 'firstname': 'Matti', 'lastname': 'Halonen', 'osoite': 'Lontokatu 20' },
    { 'id': 3, 'firstname': 'Kati', 'lastname': 'Lam', 'osoite': 'Parisinkatu 30' },
    { 'id': 4, 'firstname': 'John', 'lastname': 'Suominen', 'osoite': 'Jamaikkantie 40' },
    { 'id': 5, 'firstname': 'Elisa', 'lastname': 'Kananen', 'osoite': 'Senegalkatu 50' }
]



export default class edit extends Component {


    render() {

        return (
            <div>
                <Container className="mt-5">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>FirstName</th>
                                <th>LastName</th>
                                <th>Address</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {clientsFromDb.map((client) => (
                                <tr key={client.id}>
                                    <td>{client.id}</td>
                                    <td>{client.firstname}</td>
                                    <td>{client.lastname}</td>
                                    <td>{client.osoite}</td>
                                    <td>
                                        <Button onClick={() => this.editButtoon(client.id)} variant="outline-primary" size="sm" m={2}>Save</Button> {" "}

                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Container>
            </div>
        )
    }
}
