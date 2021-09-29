import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Books from './components/bookdata'
import AddBookForm from './components/addBookForm'
// import Row from 'react-bootstrap/Row'

class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      
      books:[],
      emailD: ''
    }
   

  }

  componentDidMount = async () => {
    let email = this.props.auth0.user.email
    console.log(' in componentDidMount');
    let booksData = `${process.env.REACT_APP_SERVER}/books?email=${email}`

    let bookdata = await axios.get(booksData);
     
    this.setState({
      books: bookdata.data,
      emailD: email
    })

    console.log('boooks data', this.state.books);
    console.log(this.state.books,"ttttttttttttttttttt")

  }

  addBook = async (event) => {
    event.preventDefault()
    console.log('add book function')
    // let email=this.state.emailD;
    // let title = event.target.title.value;
    // let description=event.target.description.value;
    // let status = event.target.status.value;


    // let newbooksData = await axios.get(`${process.env.REACT_APP_SERVER}/addBooks?email=${email}&title=${title}&description=${description}&status=${status}`)

    // always but it inside an object
    let bookInfo = {
      email: this.state.emailD,
      title: event.target.title.value,
      description: event.target.description.value,
      status: event.target.status.value
    }
    let newbooksData = await axios.post(`${process.env.REACT_APP_SERVER}/addBooks`, bookInfo)
    console.log(newbooksData);


    this.setState({
      books:newbooksData.data
    })
  }

  // to delete books
  deleteBook = async(bookID) => {
    console.log('inside delete book')
    console.log(bookID)
    //  here we will send the req to the backEnd using the ID
    let deletebooksData = await axios.delete(`${process.env.REACT_APP_SERVER}/deleteBooks?bookID=${bookID}&email=${this.state.emailD}`)
         
    this.setState({
      books:deletebooksData.data
    })
  }

  render() {
    return (
      <>
        <Jumbotron>
          <h1>My Favorite Books</h1>
          <p>
            This is a collection of my favorite books
          </p>


        </Jumbotron>

        <AddBookForm
          addBookFun={this.addBook}

        />
        {/* <Row key={1} className={styles.container} style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}> */}
        {/* <div style={{ flexDirection: "row" ,display: "flex" }} > */}
        {/* flexWrap: "wrab", */}
        {/* display: "flex", */}
          {this.state.books.map((book, i) => {
            return (
              < div key={i} >

                <Books key={i} booksD={book}
                  deleteCatFunction={this.deleteBook} />

              </div>
              
            )
          })}
        {/* </div> */}
        {/* </Row> */}
        

      </>

    )
  }

}

export default withAuth0(MyFavoriteBooks);
