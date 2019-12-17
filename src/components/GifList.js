import React from 'react'

class GifList extends React.Component{
    handleList = () => {
        return this.props.gif.map(gifUrl => {
            return <li key={gifUrl.id}><img src={gifUrl.images.original.url}></img></li>
        })
    }

    render(){
        return <ul>
           {this.handleList()}
        </ul>
    }
}

export default GifList;