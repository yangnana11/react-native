import React from 'react';
import App from './App';
// first method
// import renderer from 'react-test-renderer';

// it('renders without crashing', () => {
//   const rendered = renderer.create(<App />).toJSON();
//   expect(rendered).toBeTruthy();
// });

// second method
import { AppRegistry } from 'react-native';
AppRegistry.registerComponent('NanaFristProject', () => App);