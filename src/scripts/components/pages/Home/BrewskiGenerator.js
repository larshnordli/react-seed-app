import React from 'react';

import BrewskiViewer from './BrewskiViewer';

export default class BrewskiGenerator extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         text: 'Find your new favorite beer',
         // apiUrl: 'http://setgetgo.com/randomword/get.php',
         apiUrl: 'https://api.punkapi.com/v2/beers/random',
         brewskies: [],
         loading: false
      }
   }

   componentDidMount(){
      this.setState({
         loading:true
      })

      var tempBrews = this.state.brewskies;

      fetch(this.state.apiUrl)
      .then((response) => response.json())
      .then((responseJson) => {
         tempBrews.push(responseJson[0])

         this.setState({
            brewskies: tempBrews,
            loading: false
         })
      })
   }

   render(){
      return (
         <div className={"child-component " + this.props.className}>

         <h2>{this.state.text}</h2>

            <button
               onClick={this.componentDidMount.bind(this)}
            >Fetch me another brewski, will ya?!</button>

            {this.state.loading ? <i className="fa fa-spin fa-circle-o-notch"></i> : ''}

            <div className="clearfix"></div>

            {this.state.brewskies.map((brew, index) => {
               return <BrewskiViewer key={index} brewski={brew}/>
            })}


         </div>
      )
   }
}
