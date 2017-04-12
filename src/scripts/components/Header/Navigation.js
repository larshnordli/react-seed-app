import React from 'react';

import NavigationItem from './NavigationItem';

export default class Navigation extends React.Component{
   constructor(){
      super();
      const navItems = [
         { url: '/home', title: 'Home'},
         { url: '/about', title: 'About'},
         { url: '/pricing', title: 'Pricing'},
         { url: '/test', title: 'Tester'},
         { url: '/contact', title: 'Contact'},
      ];

      this.navigationItems = navItems.map((navItem, index) =>
         <NavigationItem key={index} url={navItem.url} title={navItem.title} />
      );
   }

   render(){
      return(
         <nav>
            {this.navigationItems}
         </nav>
      )
   }
}
