import React, { Component } from 'react';
import Header from '../components/public/header';
class Base extends Component {
  render() {
    const {children}=this.props;
    return (  
      <div>
         <Header />
         {children}
      </div>
    );
  }
}
export default Base;