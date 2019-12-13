import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';


export default class GifListContainer extends React.Component {
    constructor() {
        super()
        this.state = {
            searchParam: "",
            gifs: []
        }
    }

    onSearch = () => {
        console.log(this.state.searchParam)
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.searchParam}&api_key=EGbKbY5lLJDmCtFmVIUiRxoE0HLBu2xO&rating=g`)
            .then(resp => resp.json())
            .then(json => {
                this.setState({
                    gifs: this.readJson(json.data)
                })
                console.log(json.data)
            })
    } 

    readJson = (json, numGifs = 5) => {
        const result = []
        for (let i = 0; i < numGifs; i++) {
            result.push(json[i].images.original.url)
        }
        return result;
    }

    onChange = (searchValue) => {
        this.setState({
            searchParam: searchValue
        })
    }

    render() {
        return (
            <div>
                <GifSearch onSearch={this.onSearch} onInputChange={this.onChange} />
                <GifList gifs={this.state.gifs} />
            </div>
        )
    }
}