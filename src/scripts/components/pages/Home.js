import React from 'react';

// Import all your components here, e.g.:
// import Component from './Main/Component';

import InputBinder from './Home/InputBinder';

export default class Home extends React.Component{
   render(){
      return(
         <div class="component whole">
            <h2>Home</h2>

            <p>All your content and components go here!</p>
            <InputBinder/>
         </div>
      )
   }
}
