import React from 'react';

import Header from './Header';
import Footer from './Footer';

export default class Layout extends React.Component{
   render(){
      return(
         <div>
            <Header title="React Seed App"/>
            <Footer copyrightYear="2017" copyrightHolder="Lars Henrik Nordli"/>
         </div>
      )
   }
}
