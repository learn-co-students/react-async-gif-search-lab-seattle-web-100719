import React from 'react'

class GifList extends React.Component{
    handleList = () => {
        return this.props.gif.map(gifUrl => {
            return <li key={gifUrl.id}><img src={gifUrl.images.original.url}></img></li>
        })
    }

    render(){
        return <div>
           {this.handleList()}
        </div>
    }
}

export default GifList;