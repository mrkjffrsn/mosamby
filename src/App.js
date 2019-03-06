import React, { Component } from 'react';
import Header from './components/header';
import FeaturedContentBlock from './components/featuredContentBlock'
import { featuredContentModel } from './models/featuredContentModel'
import { firstContentBlockStyle } from './styles/homePage.js'
import './App.scss';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <FeaturedContentBlock style={firstContentBlockStyle} model={featuredContentModel} />
      </div>
    );
  }
}

export default App;
