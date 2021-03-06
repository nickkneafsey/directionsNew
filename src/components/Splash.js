import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Image, Text, View, ScrollView } from 'react-native';
import { CardSection, Button } from './common';

class Splash extends Component {
  navigate() {
    Actions.topicMenu();
  }

  render() {
    return (
      <View style={styles.main}>
        <View style={styles.bgImageWrapper}>
          <Image source={require('../../assets/fingers_big_dark_wide.png')} style={styles.bgImage} />
        </View>
        <Text></Text>
        <Text style={styles.welcome}>TapAlong!</Text>
        <Text style={styles.emojiCredit}>Emojis provided free by EmojiOne</Text>
        <CardSection style={styles.buttonContanerStyle}>
          <Button onPress={this.navigate.bind(this)}>Start</Button>
        </CardSection>
      </View>
    )
  }
}

const styles = {
  main: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  bgImageWrapper: {
    position: 'absolute',
    top: 0, bottom: 0, left: 0, right: 0
  },
  bgImage: {
    flex: 1,
    resizeMode: 'repeat',
    // 'cover', 'contain', 'stretch', 'repeat', 'center'
  },
  welcome: {
    textAlign: 'center',
    margin: 10,
    fontSize: 40,
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontFamily: 'Futura'
  },
  emojiCredit: {
    backgroundColor: 'rgba(0,0,0,0)',
    color: 'white',
    fontFamily: 'Futura'
  },
  buttonContanerStyle: {
    backgroundColor: 'rgba(0,0,0,0)',
  }
};

export default Splash;
