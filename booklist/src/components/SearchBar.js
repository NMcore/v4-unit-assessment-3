import React, { Component } from 'react'

export default class SearchBar extends Component {
    constructor(props) {
        super(props)
        
        this.state = {
            input: '',
        }
    }

    handleChange = (val) => {
        this.setState({ input: val })
    }
    
    render() {
        return (
            <nav>
                <div><input className="inputLine" onChange={(e) => this.handleChange(e.target.value)} /></div>
                <div><button className="buttons" onClick={() => this.props.filterBooks(this.state.input)}>search</button></div>
                <div><button className="buttons" onClick={this.props.reset}>clear</button></div>            
            </nav>
        )
    }
}
