import React from 'react';

import BrewskiViewer from './BrewskiViewer';

export default class BrewskiGenerator extends React.Component{
   constructor(){
      super();
      this.state = {
         text: 'Random Word:',
         // apiUrl: 'http://setgetgo.com/randomword/get.php',
         apiUrl: 'https://api.punkapi.com/v2/beers/random',
         brewski: {}
      }
   }

   componentDidMount(){

      fetch(this.state.apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
         this.setState({
            brewski: responseJson[0]
         })
      })
   }

   render(){
      return (
         <div className="child-component">
         <h2>{this.state.text}</h2>
            <button
               onClick={this.componentDidMount.bind(this)}
            >Fetch me another brewski, will ya?!</button>

            <BrewskiViewer brewski={this.state.brewski}/>

         </div>
      )
   }
}
