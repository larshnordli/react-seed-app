import React from 'react';

export default class BrewskiViewer extends React.Component{
   constructor(props){
      super(props);
      this.state = {
         collapsed: true
      }
   }

   toggleCollapse(){
      console.log('bjeff', this.state)

      this.setState({
         collapsed: !this.state.collapsed
      })
   }

   render(){
      let brewski = null;

      if(this.props.brewski){
         brewski = this.props.brewski;
      }
      else{
         brewski.name = 'Loading...';
      }

      return(
         <div className="brewski-element half">
            <img src={brewski.image_url + '?' + new Date().getTime()} alt=""/>
            <div className="brewski-text">
               <h3>{brewski.name}</h3>
               <p>{brewski.tagline}</p>
               <button class="toggle" onClick={this.toggleCollapse.bind(this)}>Show Description</button>
               <p className={'text ' + (this.state.collapsed ? 'collapsed' : 'open')}>{brewski.description}</p>
            </div>
         </div>
      )
   }
}
