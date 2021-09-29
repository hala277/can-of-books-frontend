import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'








class BookData extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                {/* <Col> */}
                {/* <CardColumns> */}


                <Card style={{ width: '18rem' }} >

                    <Card.Body>
                        <Card.Title>{this.props.booksD.title}</Card.Title>
                        <Card.Text>
                            {this.props.booksD.description}
                        </Card.Text>

                        {/* {this.props.booksD._id} */}

                        <Button onClick={() => { this.props.deleteBookFunction(this.props.booksD._id) }} variant="danger" >Delete</Button>

                        <Button onClick={() => { this.props.updateBookFunction(this.props.booksD) }} variant="primary" >Update</Button>
                    </Card.Body>

                </Card>


                {/* </CardColumns> */}
                {/* </Col> */}

            </div>
        )
    }
}

export default BookData