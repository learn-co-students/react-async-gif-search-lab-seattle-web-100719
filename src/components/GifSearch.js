import React from 'react'

class GifSearch extends React.Component{
    constructor(props){
        super(props)
    }

    handleClick = (e) => {
        e.preventDefault()
        this.props.onSearchClick()
    }

    handleInputChange = (e) => {
        this.props.onChange(e.target.value)
    }

    render(){
        return <div>
            <form onSubmit={e => this.handleClick(e)}>
                <h3>Enter a Search Term:</h3>
                <input type="text" onChange={this.handleInputChange}></input>
                <br></br>
                <input type="submit" value="Find Gifs"></input>
            </form>
        </div>
    }
}

export default GifSearch;