import React from 'react';

export default class GifSearch extends React.Component {

    handleChange = (event) => {
        this.props.onInputChange(event.target.value)
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.onSearch()
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                Enter a Search Term: <br></br>
                <input type="text" name="search" onChange={this.handleChange}></input>
                <input type="submit" name="submit" value="Find Gifs"></input>
            </form>
        )
    }
}