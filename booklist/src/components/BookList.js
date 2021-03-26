import React, { Component } from 'react'
export default class BookList extends Component {
    
    renderBooks = () => {    
        const mappedBooks = this.props.books.map((book, index) => (

            <div key={ book.id } className="book-cover">
                <div className="book-card">
                    <button onClick={ () => this.props.addToShelf( book.title )}>
                        <img alt={ book.author } className="book-image" src={ book.img } />
                    </button>
                </div>
                <div className="book-title">
                    { book.title }
                    <span>By:{ book.author }</span>
                </div>
            </div>
            
        ));
        return mappedBooks;
    };

    render() {        
        return (
            <div className="main-conent grid-1">{ this.renderBooks() }</div>
        );

    }
}

