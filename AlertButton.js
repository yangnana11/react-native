import React, {Component} from 'react';
import { Alert, Button, StyleSheet, View } from 'react-native';

export class AlertButton extends Component {
    _onPressButton() {
        Alert.alert('You tapped the button!')
    }
    render() {
        return (
          <View style={this.props.container}>            
            <View style={this.props.alternativeLayoutButtonContainer}>
              <Button
                onPress={this._onPressButton}
                title="This looks great!"
              />
              <Button
                color='#841584'
                onPress={this._onPressButton}
                title="OK!"                
              />
            </View>
          </View>
        );
    }
}