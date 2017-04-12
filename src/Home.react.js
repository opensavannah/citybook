import React, { Component } from 'react';

import Header from './instructions/Header.react.js';
import Footer from './instructions/Footer.react.js';

export default class TopNav extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    );
  }
}
