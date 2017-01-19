import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Emoji from 'react-native-emoji';

const TouchableEmoji = (props) => (
  <TouchableOpacity
    onPress={ () => props.onEmojiPress(props.name) }>
    <Text style={{fontSize: 50, textAlign: 'center'}}>
      <Emoji name={props.name}/>
    </Text>
  </TouchableOpacity>
);

export default TouchableEmoji;
