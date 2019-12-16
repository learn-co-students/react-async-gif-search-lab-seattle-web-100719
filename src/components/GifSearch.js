import React, {Component} from 'react'

class GifSearch extends Component {
    constructor() {
        super()
        this.state = {
            search: ""
        }
    }

    handleSearch = event => {
        this.setState({
            search: event.target.value
        })
        
    }

    handleFind = event => {
        event.preventDefault()
        this.props.search(this.state.search)
    }

    render() {
        return(
            <div>
                <h3>Search</h3>
                <form>
                    <input type="text" name="search" onChange={event => this.handleSearch(event)} value={this.state.search}></input>
                    <button onClick={event => this.handleFind(event)}>Find Gifs</button>
                </form>
            </div>
        )
    }
}

export default GifSearch