import React, { Component } from 'react';
import { Text } from 'react-native';

export class Greeting extends Component {
    render() {
      return (
        <Text>Hello {this.props.name}!</Text>
      );
    }
}