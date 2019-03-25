import React, { Component } from 'react';
import Header from './components/header';
import FeaturedContentBlock from './components/featuredContentBlock'
import { appKitContentModel, rMockContentModel, workContentModel, teamContentModel } from './models/featuredContentModel'
import { firstContentBlockStyle, secondContentBlockStyle, thirdContentBlockStyle, fourthContentBlockStyle } from './styles/homePage.js'
import './App.scss';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <FeaturedContentBlock style={firstContentBlockStyle} model={appKitContentModel} />
        <FeaturedContentBlock style={secondContentBlockStyle} model={rMockContentModel} />
        <FeaturedContentBlock style={thirdContentBlockStyle} model={workContentModel} />
        <FeaturedContentBlock style={fourthContentBlockStyle} model={teamContentModel} />
      </div>
    );
  }
}

export default App;
