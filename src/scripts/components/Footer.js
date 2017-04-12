import React from 'react';

export default class Footer extends React.Component{

   render(){
      return(
         <footer>
            <p>© {this.props.copyrightYear} {this.props.copyrightHolder}</p>
         </footer>
      )
   }
}
