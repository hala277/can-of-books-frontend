import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Jumbotron from 'react-bootstrap/Jumbotron';
import './BestBooks.css';
// import { withAuth0 } from '@auth0/auth0-react';
import axios from 'axios';

class MyFavoriteBooks extends React.Component {

  constructor(props){
    super(props);
      this.state = {
        books:[]
      }
    }
     
    componentDidMount = async () =>{
  
      console.log(' in componentDidMount');
      let booksData =await
       axios.get(`${process.env.REACT_APP_SERVER}/books?email=hala`)
      console.log(booksData);
      // await axios.get
      // let bookdata = await axios.get(booksData);
      // console.log(booksdata);
      this.setState({
        books:booksData.data
      })
    
      console.log('boooks data',this.state.books);
    
    }
  render() {
    return(
      <>
      <Jumbotron>
        <h1>My Favorite Books</h1>
        <p>
          This is a collection of my favorite books
        </p>
      

      </Jumbotron>

      {/* {
        this.state.books.map((book,i) =>{
          return(
            <>
           
            <h2>{book.books[0].title}</h2>

            <p>{book.books[0].description}</p>
            </>
          )
        })
      } */}
</>

    )
  }
}

export default MyFavoriteBooks;
