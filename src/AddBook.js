import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import Book from './Book.js'

class AddBook extends Component{

    state={
        query:'',
        searchBooks: [],
    }

    handleChange = (event) =>{
      const val = event.target.value;
      this.setState({query: val},this.searchAllBooks

      )
    }
    searchAllBooks = () => {
        if (this.state.query.length > 0) {
            BooksAPI.search(this.state.query).then(books => {
              if (books.error) {
                this.setState({ searchBooks: [] });
              } else {
                this.setState({ searchBooks: books });
              }
            });
        } else {
            this.setState({ searchBooks: [] });
        }
    };

    changeBookShelf = (book,shelf) =>{
      this.props.changeBookShelf(book,shelf);
    }


    render(){
      const updatedBooks = this.state.searchBooks;
      for (const book of updatedBooks) {
        for (const b of this.props.books) {
          if (b.id === book.id) {
            book.shelf = b.shelf;
          }
        }
      }

        return(
          <div className="search-books">
            
            <div className="search-books-bar">
              <Link
                className='close-search'
                to='/'>
                    Close
                </Link>
              <div className="search-books-input-wrapper">
                <input 
                    type="text" 
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onChange={ this.handleChange}
                />
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
                {this.state.searchBooks.map((b)=>(
                  <Book key={b.id} shelf={b.shelf ? b.shelf : 'none'} book={b} changeBookShelf={this.changeBookShelf}/>
                  ))
                }
                
              </ol>
            </div>
          </div>
        )

    }
}

AddBook.propTypes = {
  books: PropTypes.array.isRequired,
  changeBookShelf: PropTypes.func.isRequired,
};

export default AddBook;