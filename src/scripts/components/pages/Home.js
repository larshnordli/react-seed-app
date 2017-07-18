import React from 'react';

// Import all your components here, e.g.:
// import Component from './Main/Component';

import InputBinder from './Home/InputBinder';
import BrewskiGenerator from './Home/BrewskiGenerator';
import PetSelector from './Home/PetSelector';

export default class Home extends React.Component{
   render(){
      return(
         <div>
            <h2>Home</h2>

            <p>All your content and components go here!</p>

            <InputBinder className="component float one-third"/>
            <PetSelector className="component float one-third" />

            <BrewskiGenerator className="component whole" />

         </div>
      )
   }
}
