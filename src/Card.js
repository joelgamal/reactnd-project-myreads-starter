import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Shelf from './Shelf.js'
import { Link } from 'react-router-dom'


class Card extends Component{

  changeBookShelf = (book,shelf) =>{
    this.props.changeBookShelf(book,shelf);
  }

    render(){
        const books = this.props.books;

        return(
            <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf key='currentlyReading' books={books} name= 'currentlyReading' changeBookShelf={this.changeBookShelf}/>
                <Shelf key='wantToRead'  books={books} name= 'wantToRead' changeBookShelf={this.changeBookShelf}/>
                <Shelf key='read' books={books} name= 'read' changeBookShelf={this.changeBookShelf} />
              </div>
            </div>
            <div className="open-search">
              <Link className="add-book-link"
                    to='/search'
                    
                >Add a book</Link>
            </div>
          </div>
        )
    }

}

// Card.propTypes = {
//     books: PropTypes.array.isRequired,
// };

export default Card;