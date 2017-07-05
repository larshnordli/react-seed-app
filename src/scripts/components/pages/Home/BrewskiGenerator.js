import React from 'react';

import BrewskiViewer from './BrewskiViewer';

export default class BrewskiGenerator extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         text: 'Find your new favorite beer',
         // apiUrl: 'http://setgetgo.com/randomword/get.php',
         apiUrl: 'https://api.punkapi.com/v2/beers/random',
         brewskies: []
      }
   }

   componentDidMount(){
      fetch(this.state.apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
         this.state.brewskies.push(responseJson[0])
      })
   }

   render(){
      return (
         <div className={"child-component " + this.props.className}>

         <h2>{this.state.text}</h2>

            <button
               onClick={this.componentDidMount.bind(this)}
            >Fetch me another brewski, will ya?!</button>

            {this.state.brewskies.map(function(brewski){
               return <p>bjefffff</p>
            })}


         </div>
      )
   }
}
