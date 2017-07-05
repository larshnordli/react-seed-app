import React from 'react';

// Import all your components here, e.g.:
// import Component from './Main/Component';

import InputBinder from './Home/InputBinder';
import BrewskiGenerator from './Home/BrewskiGenerator';

export default class Home extends React.Component{
   render(){
      return(
         <div>
            <h2>Home</h2>

            <p>All your content and components go here!</p>

            <InputBinder className="component one-third"/>
            <BrewskiGenerator className="component two-thirds" />
         </div>
      )
   }
}
