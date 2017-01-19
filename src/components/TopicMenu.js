import React, { Component } from 'react';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuItem from './MenuItem';

class TopicMenu extends Component {
  onRowPress() {
    Actions.game();
  }

  render () {
    return (
      <View>
        <MenuItem onRowPress={this.onRowPress} text={"All Topics"} />
      </View>
    )
  }
}

export default TopicMenu;
