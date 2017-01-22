import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import Emoji from 'react-native-emoji';

const TouchableEmoji = (props) => (
  <TouchableOpacity
    onPress={ () => props.onEmojiPress(props.index) }>
    <Text style={{fontSize: props.emojiHeight, textAlign: 'center'}}>
      <Emoji name={props.name}/>
    </Text>
  </TouchableOpacity>
);

// const TouchableEmoji = (props) => (
//   <TouchableOpacity
//     style={{width: props.emojiHeight}}
//     onPress={ () => props.onEmojiPress(props.name) }>
//       <Emoji name={props.name} />
//   </TouchableOpacity>
// );

export default TouchableEmoji;
