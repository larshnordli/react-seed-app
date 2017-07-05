import React from 'react';

export default class InputBinder extends React.Component{
   //TODO: change to send props to Layout

   constructor(props){
      super(props);
      this.state = {
         text: 'Change me!'
      }
   }

   handleChange(e){
      const text = e.target.value;
      this.setState({text});
   }

   reset(){
      this.setState({text:'Change me again!'});
   }

   render(){
      return(
         <div className={"child-component " + this.props.className}>
            <input
               value={this.state.text}
               onChange={this.handleChange.bind(this)}
            />
            <button
               onClick={this.reset.bind(this)}
            >Reset</button>
            <h3>Result:</h3>
            <p>{this.state.text}</p>
         </div>
      )
   }
}
