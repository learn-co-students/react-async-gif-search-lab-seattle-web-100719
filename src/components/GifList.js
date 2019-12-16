import React from 'react'
// import GifListContainer from '../containers/GifListContainer'

export default class GifList extends React.Component{
    



    displayGiphies = () =>{
        return this.props.giphy.map(gif => {
            return <li key ={gif.id} ><img src={gif.images.original.url}  width={400} height={400}/>
            </li>
        })
    }

    render(){
        return <ul>
            {this.displayGiphies()}
            </ul>
    }

}