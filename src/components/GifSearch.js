import React from 'react';

class GifSearch extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         searchTerm: '',
      };
   }

   handleSubmit = event => {
      event.preventDefault();
      this.props.onSubmit(this.state.searchTerm);
   };

   handleChange = event => {
      this.setState({
         searchTerm: event.target.value,
      });
   };

   render() {
      return (
         <form onSubmit={this.handleSubmit}>
            <input
               type="text"
               value={this.state.searchTerm}
               onChange={this.handleChange}
            />
            <input type="submit" />
         </form>
      );
   }
}

export default GifSearch;
