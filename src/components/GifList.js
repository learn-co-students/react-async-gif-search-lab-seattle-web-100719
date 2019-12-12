import React from 'react';

class GifList extends React.Component {

    renderData = () => {
        return this.props.gifs.map(gif => {
            return <li><img src={gif}/></li>;
        });
    }

    render(){
        return (
            <div>
                <ul>
                    {this.renderData()}
                </ul>
            </div>
        )
    }

}

export default GifList;