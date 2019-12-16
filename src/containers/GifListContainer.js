import React, {Component} from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'

class GifListContainer extends Component {
    constructor() {
        super()
        this.state = {
            gifs: []
        } 
    }

    fetchGifs = (keyword = 'dolphin') => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${keyword}&api_key=tjW9Nf9rPFaAAXGtZ0zSOC2j5OFs5ffo`)
            .then(resp => resp.json())
            .then(gifs => {
                let gifsArray = []
                for (let i=0; i < 3; i++) {
                    gifsArray.push(gifs.data[i])
                }
                this.setState({
                    gifs: gifsArray
                }) 
            })
    }

    componentDidMount() {
        this.fetchGifs()
    }

    render () {
        return (
            <div>
                <h1>Gifs!</h1>
                <GifSearch search={this.fetchGifs}/>
                <GifList gifs={this.state.gifs}/>
            </div>
        )
    }
}

export default GifListContainer