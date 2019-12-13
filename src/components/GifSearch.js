import React, { Component } from "react";

class GifSearch extends Component {
  constructor() {
    super();
    this.state = {
      searchText: "",
    };
  }

  handleSearchChange = event => {
    this.setState({
      searchText: event.target.value
    });
  };


  handleSubmit = event => {
    event.preventDefault();
    this.props.submitHandler(this.state.searchText);
    // send the data
  };

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input
            type="text"
            onChange={event => this.handleSearchChange(event)}
            value={this.state.searchText}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}

export default GifSearch;
