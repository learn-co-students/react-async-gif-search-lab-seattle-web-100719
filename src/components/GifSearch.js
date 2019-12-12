import React from 'react';

class GifSearch extends React.Component {

    render(){
        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    Search gifs: <input type="text"/> 
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }

}

export default GifSearch;