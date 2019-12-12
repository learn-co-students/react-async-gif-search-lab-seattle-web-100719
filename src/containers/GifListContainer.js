import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';

class GifListContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            gifs: []
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        // console.log(event.target[0].value);
        const gifs = [];
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target[0].value}&api_key=k7CbiqyaBncQwfzBPB6lODnR6hD3eRFB&rating=g`)
        .then(resp => resp.json())
        .then(json => {
            for(let i = 0; i < 3; i++){
                gifs.push(json.data[i].images.original.url);
            }
            this.setState({
                gifs: gifs
            })
        })
    }

    render(){
        return (
        <div>
            <GifSearch handleSubmit={this.handleSubmit}/>
            <GifList gifs={this.state.gifs} />
        </div>
        )
    }

}

export default GifListContainer;