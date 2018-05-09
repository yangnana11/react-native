import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export class CookingTranslator extends Component {
    constructor(props) {
        super(props);
        this.state = {text:''};
    }
    render() {
        return (
            <View style={this.props.viewStyle}>                
                <TextInput
                style={this.props.inputOrgStyle}
                placeholder="Type here to translate!"
                onChangeText={(text) => this.setState({text})}
                />
                <Text style={this.props.translateStyle}>
                {this.state.text.split(' ').map((word) => word && '🍳').join(' ')}
                </Text>
            </View>
        );
    }
}