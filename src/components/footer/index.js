import React, { Component } from 'react';
import './footer.scss'

class footer extends Component{
  render(){
    return (
      <footer>
        <div class="line-break" />
        <span> Copyright © 2019 Mosamby Inc. All rights reserved. </span>
        <section class="links">
          <a class="link" href="/#"> Privacy </a>
          <a class="link" href="/#"> Terms of Use </a>
          <a class="link" href="/#"> Legal </a>
          <a class="link" href="/#"> Site Map </a>
        </section>
      </footer>
    )
  }
}

export default footer;
