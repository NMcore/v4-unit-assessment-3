import React, { Component } from 'react'
export default class Shelf extends Component {

    renderShelf = () => {
        const mappedShelf = this.props.mappedTitles.map((shelf, i) => (
            
            <ul key={i} className="shelf-list">
                <li>{shelf}</li>
            </ul>
            
        ));
        return mappedShelf;
    };

    render() {
        //Reference for later: const mappedShelf = this.props.mappedTitles.map((b, i) => <li key={i}>{b}</li>);
        return (
            <div className="shelf">
                <button onClick={this.props.clearShelf} className="buttons button-a">clear</button>
                {this.renderShelf()}
            </div>
        )
    }
}
