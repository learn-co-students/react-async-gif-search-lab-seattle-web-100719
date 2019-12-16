import React from 'react';
// import GifListContainer from '../containers/GifListContainer'

export default class GifSearch extends React.Component{

    state={
        input: ""
    }

    handleChange=(e)=> {
        this.setState({
            
            input: e.target.value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.onSearchGiphy(this.state.input)
    }

    render(){
        return(
            <div style={{position: "right", right: true}} >
            <form onSubmit= {this.handleSubmit}  >
                 Enter a search Term
                 <input onChange={this.handleChange} value ={this.state.input}></input>
                 <input type="submit"/>
            </form>
            </div>
        )
    }

}
