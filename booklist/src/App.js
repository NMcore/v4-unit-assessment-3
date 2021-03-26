import React, { Component } from 'react';
import data from './data';
import Header from './components/Header'
import SearchBar from './components/SearchBar';
import BookList from './components/BookList';
import Shelf from './components/Shelf';


class App extends Component {
  constructor() {
    super();
    this.state = {
      books: data,
      shelf: [],
    }
    
  }

  addToShelf = (val) => {
    const shelf = [...this.state.shelf];
    shelf.unshift(val);
    this.setState({shelf: shelf});
  }

  clearShelf = () => {
    const clear = []
    clear.length = 0
    this.setState({shelf: clear})
  }

  filterBooks = (input) => {
      let bookFinder = [...this.state.books]
      let bookResult = []
        for (let key in bookFinder) {  
          if (bookFinder[key].title.includes(input)) {
            bookResult.push(bookFinder[key])
          }
        }
      this.setState({books: bookResult})
  }

  reset = () => {
    this.setState({books: data})
  }

  render() {
    return (
      <div>
        <Header />
        <SearchBar 
          filterBooks={this.filterBooks}
          reset={this.reset}
          />
        <main>
          <BookList 
            books={this.state.books}
            addToShelf={this.addToShelf}
          />
          <Shelf 
            mappedTitles={this.state.shelf}
            clearShelf={this.clearShelf}
          />
        </main>
      </div>
    );
  }

}
export default App;