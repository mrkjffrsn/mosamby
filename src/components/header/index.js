import React, { Component } from 'react';
import './header.scss';

class Header extends Component {
  render() {
    return (
      <header className="site-header">
        <nav>
          <a href='/#'> <span> Roku App Kit </span> </a>
          <a href='/#'> <span> rMock </span> </a>
        </nav>
      </header>
    );
  }
}

export default Header;
