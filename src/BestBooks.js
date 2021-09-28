import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
// import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';
import { withAuth0 } from '@auth0/auth0-react';
import Books from './components/bookdata'


class MyFavoriteBooks extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }

  componentDidMount = async () => {
    let email = this.props.auth0.user.email
    console.log(' in componentDidMount');
    let booksData = `${process.env.REACT_APP_SERVER}/books?email=${email}`

    let bookdata = await axios.get(booksData);

    this.setState({
      books: bookdata.data
    })

    console.log('boooks data', this.state.books);

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
        <div style={{display:"flex" , flexWrap:"wrab", flexDirection:"row" }} >
       {this.state.books.map((book,i)=>{
         return(
         < div key ={i} >
        
         <Books key ={i} booksD = {book}/>
       
           </div>
         )
       })}
        </div>
       
      </>

    )
  }

}

export default withAuth0(MyFavoriteBooks);
