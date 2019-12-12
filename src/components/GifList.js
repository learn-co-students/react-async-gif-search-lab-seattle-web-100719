import React from 'react';

class GifList extends React.Component {
   makeGifLis = () => {
      return this.props.data.map(gif => {
         return (
            <li>
               <img src={gif} />
            </li>
         );
      });
   };

   render() {
      return (
         <div>
            <ul>{this.makeGifLis()}</ul>
         </div>
      );
   }
}

export default GifList;
