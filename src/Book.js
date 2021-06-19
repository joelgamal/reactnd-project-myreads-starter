import React, { Component } from 'react'
import PropTypes from 'prop-types';
import * as BooksAPI from './BooksAPI'

class Book extends Component{

    state={
        bookShelf: this.props.shelf
    }

    handleChange = (event) =>{
        this.setState({bookShelf: event.target.value},this.changeShelf);
    }

    changeShelf =()=>{
        this.props.changeBookShelf(this.props.book, this.state.bookShelf);
        BooksAPI.update(this.props.book, this.state.bookShelf)
            .then(data => {
                console.log(data); 
              });
    }

    render(){
        const book = this.props.book;
        return(
            <li key={book.id}>
                <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <div className="book-shelf-changer">
                        <select onChange={this.handleChange} value={this.state.bookShelf}>
                            <option value="move" disabled >Move to...</option>
                            <option value="currentlyReading">Currently Reading</option>
                            <option value="wantToRead">Want to Read</option>
                            <option value="read">Read</option>
                            <option value="none" >None</option>
                        </select>
                    </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                </div>
            </li>
        )
    }



}

Book.propTypes = {
    shelf: PropTypes.string.isRequired,
    book: PropTypes.object.isRequired,
    changeBookShelf: PropTypes.func.isRequired,
};

export default Book;