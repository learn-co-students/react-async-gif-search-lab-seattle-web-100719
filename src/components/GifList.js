import React, { Component } from "react";

class GifList extends Component {
  gifDataMap = () => {
    return this.props.gifs.map(gif => {
      return (
        <li id={gif.id} key={gif.id}>
          <img src={gif.images.original.url} alt=""></img>
        </li>
      );
    });
  };

  render() {
    return <ul>{this.gifDataMap()}</ul>;
  }
}

export default GifList;
