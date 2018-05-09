import React from 'react';
import { StyleSheet, Text, ScrollView, View, Image, Button, Alert } from 'react-native';
import { Greeting } from './Greeting';
import { Blink } from './Blink';
import { styles } from './Styles';
import { CookingTranslator } from './CookingTranslator';
import { AlertButton } from './AlertButton';
import { Touchables } from './Touchables';

export default class App extends React.Component {
  render() {
    let pic = {
      uri: 'https://upload.wikimedia.org/wikipedia/commons/d/de/Bananavarieties.jpg'
    };
    // non scrolling view
    // return (
    //   <View style={styles.container}>
    //     <Greeting name='Nana' />
    //     <Image source={pic} style={{width:193, height:110}}/>
    //     <Blink text='I love to blink' style={styles.red}/>
    //     <View style={styles.containerBlue}></View>
    //     <CookingTranslator 
    //     viewStyle={styles.cookingTranslatorView} 
    //     inputOrgStyle={styles.cookingTranslatorOrgText} 
    //     translateStyle={styles.cookingTranslatorTranslate}></CookingTranslator>
    //     <AlertButton 
    //       container={styles.container} 
    //       buttonContainer={styles.alertButtonContainer1} 
    //       alternativeLayoutButotnContainer={styles.alertButtonContainer2} 
    //       buttonStyle={styles.alertButton}>
    //     </AlertButton>
    //     <Touchables 
    //       container={styles.touchableContainer} 
    //       button={styles.touchableButton2} 
    //       buttonText={styles.touchableText}>
    //     </Touchables>
    //   </View>
    // );
    return (
      <ScrollView>
        <Greeting name='Nana' />
        <Image source={pic} style={{width:193, height:110}}/>
        <Blink text='I love to blink' style={styles.red}/>
        <View style={styles.containerBlue}></View>
        <CookingTranslator 
        viewStyle={styles.cookingTranslatorView} 
        inputOrgStyle={styles.cookingTranslatorOrgText} 
        translateStyle={styles.cookingTranslatorTranslate}></CookingTranslator>
        <AlertButton 
          container={styles.container} 
          buttonContainer={styles.alertButtonContainer1} 
          alternativeLayoutButotnContainer={styles.alertButtonContainer2} 
          buttonStyle={styles.alertButton}>
        </AlertButton>
        <Touchables 
          container={styles.touchableContainer} 
          button={styles.touchableButton2} 
          buttonText={styles.touchableText}>
        </Touchables>
      </ScrollView>
    );
  }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
