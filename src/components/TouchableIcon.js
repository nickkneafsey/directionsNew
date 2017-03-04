import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TouchableIcon = (props) => (
  <TouchableOpacity
    style={props.style}
    onPress={ () => props.onIconPress(props.index) }>
      <Icon name={props.name} size={props.emojiHeight} style={{ textAlign: 'center', padding: 5 }} />
  </TouchableOpacity>
);

export default TouchableIcon;
