import React, { Component } from 'react';
import GifList from './GifList'
import GifSearch from './GifSearch'

class GifListContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gifObjs: []
        }
    }

    handleSubmit = (searchTerm) => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => this.setState({gifObjs: json.data.slice(1,4)})) // more to do here, drill deeper into the object
    }

    render() {
        return (
            <div>
                <GifList gifs={this.state.gifObjs} />
                <GifSearch submitHandler={this.handleSubmit} />
            </div>
        );
    }
}

export default GifListContainer;