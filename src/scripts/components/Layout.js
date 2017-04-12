import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main'

export default class Layout extends React.Component{
   render(){
      return(
         <div>
            <Header
               title="React Seed App"
            />

            <Main />

            <Footer
               copyrightYear="2017"
               copyrightHolder="Lars Henrik Nordli"
               url="https://github.com/larshnordli/react-seed-app"
               urlTitle="GitHub"
               faIcon="github"
            />
         </div>
      )
   }
}
