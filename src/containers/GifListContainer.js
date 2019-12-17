import React from 'react'
import GifList from '../components/GifList'
import GifSearch from '../components/GifSearch'
import '../components/GifListContainer.css'

class GifListContainer extends React.Component{
    constructor(){
        super()
        this.state = {
            gifs: [],
            search: 'all'
        }
    }

    handleOnChange = (type) => {
        this.setState({
            search: type
        })
    }

    fetchSearch = () => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${this.state.search === '' ? "all" : this.state.search}&api_key=SUDTwC3LYcaMWIqOGXHtMKslK16gJFMk&rating=g`)
        .then(resp => resp.json())
        .then(json => {
          this.setState({
              gifs: json.data
          })
        })
    }

    componentDidMount(){
        fetch('https://api.giphy.com/v1/gifs/search?q=all&api_key=SUDTwC3LYcaMWIqOGXHtMKslK16gJFMk&rating=g')
        .then(resp => resp.json())
        .then(json => {
          this.setState({
              gifs: json.data
          })
        })
      }

      render(){
          return <div className ="container">
            <GifSearch onChange={this.handleOnChange} onSearchClick={this.fetchSearch}/>
            <GifList gif={this.state.gifs}/>
            </div>
      }
}

export default GifListContainer;