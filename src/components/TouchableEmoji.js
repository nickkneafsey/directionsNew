import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { findEmojiUnicode } from '../utility/emojiOneHelper';
import Emoji from './Emoji';


const TouchableEmoji = (props) => {
  return (
    <TouchableOpacity
      style={{ flex: 1, ...props.styles }}
      onPress={ () => props.onEmojiPress(props.index) }>
      <Emoji
        styles={{flex: 1}}
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
