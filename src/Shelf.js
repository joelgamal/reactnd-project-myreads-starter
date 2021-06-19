import React, { Component } from 'react'
import PropTypes from 'prop-types';
import Book from './Book.js'

class Shelf extends Component{

    
    // state={
    //     shelfData:{}
    // }

    // shelfDataUpdate =(data) =>{
    //     this.setState({shelfData:data},console.log(data))
        
    // }

    changeBookShelf = (book,shelf) =>{
        this.props.changeBookShelf(book,shelf);
    }

    render(){
        const books = this.props.books;
        const name = this.props.name;


        return(
            <div className="bookshelf">
                <h2 className="bookshelf-title">{name}</h2>
                <div className="bookshelf-books">
                    <ol className="books-grid" >
                      {books.map((b)=>(
                          (b.shelf ===name) &&(<Book book={b} changeBookShelf={this.changeBookShelf}/>)
                        )
                      )   
                      }
                    </ol>
                </div>
            </div>
        )

    }
}

// Shelf.propTypes = {
//     books: PropTypes.array.isRequired,
//     name: PropTypes.string.isRequired
// };

export default Shelf;