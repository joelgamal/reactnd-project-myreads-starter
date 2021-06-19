import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import { Route } from 'react-router-dom'
import Card from './Card.js'
import AddBook from './AddBook'


class BooksApp extends React.Component {
  state = {
    books:[],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books: books
        }))
      })
  }

  changeBookShelf = (book , shelf) =>{
    console.log("check")
    let updatedBooks = [];
    updatedBooks = this.state.books.filter(b => b.id !== book.id);

    book.shelf = shelf;
    updatedBooks = updatedBooks.concat(book);

    this.setState({
      myBooks: updatedBooks,
    },console.log(this.state.books));
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Card books={this.state.books} changeBookShelf={this.changeBookShelf}/>
        )} />
        <Route path='/search' render={() => (
          <AddBook changeBookShelf={this.changeBookShelf}
          />
        )} />
        
      </div>
    )
  }
}

export default BooksApp
