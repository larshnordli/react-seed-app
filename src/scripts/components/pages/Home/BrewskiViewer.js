import React from 'react';

export default class BrewskiViewer extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         collapsed: true
      }
   }

   toggleCollapse(e){
      e.preventDefault();

      this.setState(prevState => ({
          collapsed: !prevState.collapsed
      }));

      this.setState({
         collapsed: !this.state.collapsed
      })
   }

   render(){
      let brewski = null;

      if(this.props.brewski){
         brewski = this.props.brewski;
      }

      return(
         <div className="brewski-element one-third float">
            <img src={brewski.image_url + '?' + new Date().getTime()} alt=""/>
            <div className="brewski-text">
               <h3>{brewski.name}</h3>
               <p>{brewski.tagline}</p>
               <a href="#" class="toggle" onClick={this.toggleCollapse.bind(this)}>{this.state.collapsed ? 'Show' : 'Hide'} Description</a>
               <p className={'text ' + (this.state.collapsed ? 'collapsed' : 'open')}>{brewski.description}</p>
            </div>
         </div>
      )
   }
}
