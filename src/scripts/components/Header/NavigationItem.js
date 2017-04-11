import React from 'react';

export default class NavigationItem extends React.Component{
   render(){
      return(
         <a href={this.props.url}>{this.props.title}</a>
      )
   }
}
