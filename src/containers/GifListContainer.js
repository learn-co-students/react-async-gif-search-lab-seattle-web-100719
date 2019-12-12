import React from 'react';
import GifSearch from '../components/GifSearch';
import GifList from '../components/GifList';

class GifListContainer extends React.Component {
   constructor() {
      super();

      this.state = {
         data: [],
      };
   }

   fetchData = search => {
      console.log(search);
      let gifs = [];
      fetch(
         `https://api.giphy.com/v1/gifs/search?q=${search}&api_key=dc6zaTOxFJmzC&rating=g`,
      )
         .then(resp => resp.json())
         .then(json => {
            for (let i = 0; i < 3; i++) {
               gifs.push(json.data[i].images.original.url);
            }
            this.setState({
               data: gifs,
            });
         });
   };

   submitForm = search => {
      console.log(search);
      this.fetchData(search);
   };

   render() {
      return (
         <div>
            <GifSearch onSubmit={this.submitForm} />
            <GifList data={this.state.data} />
         </div>
      );
   }
}

export default GifListContainer;
