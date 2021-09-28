import React, { Component } from 'react';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'






class BookData extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
          
                <Card style={{marginLeft:"30px",width: '18rem'}} >
               
                    <Card.Body>
                     <Card.Title>{this.props.booksD.title}</Card.Title> 
                    <Card.Text>
                        {this.props.booksD.description}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                    </Card.Body>
                   
                </Card>
              
         
            </div>
        )
    }
}

export default BookData