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

    // updateQuery = (value) => {
    //     this.setState({
    //         query: value
    //     })
    //     // if (this.state.query.length > 0) {
    //         // this.searchAllBooks();
    //     // }else{
    //     //     this.setState({ searchBooks: [] });
    //     //     console.log('empty query   22');
    //     // }
    //     console.log(value);
    //     console.log(this.state.query);
    // }

    handleChange = (event) =>{
      const val = event.target.value;
      this.setState({query: val},this.searchAllBooks

      )
    }
    searchAllBooks = () => {
      console.log(this.state.query);
        if (this.state.query.length > 0) {
            BooksAPI.search(this.state.query).then(books => {
              if (books.error) {
                this.setState({ searchBooks: [] });
                console.log('errorrrrr');
              } else {
                this.setState({ searchBooks: books });
              }
            });
        } else {
            this.setState({ searchBooks: [] });
            console.log('empty query');
        }
        console.log(this.state.searchBooks);
    };

    changeBookShelf = (book,shelf) =>{
      this.props.changeBookShelf(book,shelf);
    }


    render(){

        return(
          <div className="search-books">
            
            <div className="search-books-bar">
              {/* <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button> */}
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
                    <Book book={b} changeBookShelf={this.changeBookShelf}/>
                  ))
                }
                
              </ol>
            </div>
            <p>{this.state.query} </p>
          </div>
        )

    }
}


export default AddBook;