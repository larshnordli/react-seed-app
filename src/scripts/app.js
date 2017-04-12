import React from 'react';
import ReactDOM from 'react-dom';

import Styles from '../styles/sass/style.scss';

// Vendors
import FontAwesome from '../vendor/font-awesome/scss/font-awesome.scss';

import Layout from './components/Layout';

const app = document.getElementById('app');
ReactDOM.render(<Layout/>, app);
