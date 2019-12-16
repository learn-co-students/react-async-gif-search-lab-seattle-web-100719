import React, {Component} from 'react'

class GifList extends Component {

    renderEachGif = () => {
        return this.props.gifs.map((gif) => {
            return <li key={gif.id}><img src={gif.images.original.url}></img></li>
        })
    }

    render() {
        return (
            <div>
                <ul>
                    {this.renderEachGif()}
                </ul>
            </div>
        )
    }
}

export default GifList