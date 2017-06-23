import React from 'react';

export default class BrewskiViewer extends React.Component{
   render(){
      let brewski = null;

      if(this.props.brewski){
         brewski = this.props.brewski;
      }
      else{
         brewski.name = 'Loading...';
      }

      return(
         <div>
            <h3>{brewski.name}</h3>
         </div>
      )
   }
}
