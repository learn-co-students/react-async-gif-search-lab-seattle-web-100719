import React from 'react'
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';




export default class GifListContainer extends React.Component{
    constructor(){
        super()
        this.state ={
            date: new Date(),
            giphy: [],
            search: "dolphin"
        }
        this.FetchGriphy(this.state.search)
        console.log(this.state.datec)
    }

    tick= ()=>{
        console.log("did tick invoked")
        this.setState({
            date: new Date()
        })
    }

    componentDidMount(){
        console.log("did mount invoked")
        this.timer= setInterval( () => this.tick(), 1000)
    }
    

    FetchGriphy(searchInput){
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchInput}&api_key=eMGd7vQ6yjCA3dg4TR5w9uuTZ6FWriFi`)
        .then(resp => resp.json())
        .then(json => this.changeState(json))
    }
    
    changeState= (json)=> {
        this.setState({
            giphy: json.data.slice(0,3)
        })
    }

    searchGiphy= (input)=>{
        this.setState({
            search: input
        })
        this.FetchGriphy(input)
    }

    render(){
        return <div>
                    <GifSearch onSearchGiphy={this.searchGiphy}/>           
                    <GifList giphy = {this.state.giphy}/>
                    <div><h2>
                        this is the time {this.state.date.toLocaleTimeString()}
                    </h2></div>
                </div>
    }


}