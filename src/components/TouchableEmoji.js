import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Emoji from 'react-native-emoji';

const TouchableEmoji = (props) => (
  <TouchableOpacity
    style={props.style}
    onPress={ () => props.onEmojiPress(props.index) }>
    <Text style={{fontSize: props.emojiHeight, textAlign: 'center'}}>
      <Emoji name={props.name}/>
    </Text>
  </TouchableOpacity>
);

export default TouchableEmoji;
