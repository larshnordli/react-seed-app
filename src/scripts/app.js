import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';

import Styles from '../styles/sass/style.scss';

// Vendors
require('!style-loader!css-loader!sass-loader!../vendor/font-awesome/scss/font-awesome.scss');
import FontAwesome from '../vendor/font-awesome/scss/font-awesome.scss';

import Layout from './components/Layout';

import Pricing from './components/pages/Pricing';
import About from './components/pages/About';
import Home from './components/pages/Home';

const app = document.getElementById('app');
//ReactDOM.render(<Layout/>, app);
ReactDOM.render(
   <BrowserRouter>
      <Layout>
         <Route exact path="/" component={Home} />
         <Route path="/about" component={About}/>
         <Route path="/pricing" component={Pricing}/>
      </Layout>
   </BrowserRouter>,
   app);
