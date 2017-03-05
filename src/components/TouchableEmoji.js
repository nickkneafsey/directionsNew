import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { findEmojiUnicode } from '../utility/emojiOneHelper';
import Emoji from './Emoji';


const TouchableEmoji = (props) => {
  return (
    <TouchableOpacity
      style={props.style}
      onPress={ () => props.onEmojiPress(props.index) }>
      <Emoji
        emojiHeight={props.emojiHeight}
        name={props.name}
        />
    </TouchableOpacity>
  )
};

export default TouchableEmoji;

//
// <Text style={{fontSize: props.emojiHeight, textAlign: 'center'}}>
//   {emojione.shortnameToImage(`:${props.name}:`)}
// </Text>
