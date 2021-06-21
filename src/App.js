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

  async componentDidMount() {
    const books = await BooksAPI.getAll()
    this.setState({ books })
  }

  changeBookShelf = (book , shelf) =>{
    let updatedBooks = [];
    updatedBooks = this.state.books.filter(b => b.id !== book.id);

    book.shelf = shelf;
    updatedBooks = updatedBooks.concat(book);

    this.setState({
      books: updatedBooks,
    });
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => (
          <Card books={this.state.books} changeBookShelf={this.changeBookShelf}/>
        )} />
        <Route path='/search' render={() => (
          <AddBook books={this.state.books} changeBookShelf={this.changeBookShelf}
          />
        )} />
        
      </div>
    )
  }
}

export default BooksApp
