import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuItem from './MenuItem';

class AgeMenu extends Component {
  onRowPress() {
    Actions.topicMenu();
  }

  render () {
    return (
      <View>
        <MenuItem onRowPress={this.onRowPress} text={"All Ages"} />
      </View>
    )
  }
}

export default AgeMenu;
