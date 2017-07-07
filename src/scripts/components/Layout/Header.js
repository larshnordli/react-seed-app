import React from 'react';

import Navigation from './Header/Navigation';

export default class Header extends React.Component{
   render(){
      return(
         <header>
            <h1 className="float left">{this.props.title}</h1>
            <Navigation />
         </header>
      )
   }
}
