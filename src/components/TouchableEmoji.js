import React from 'react';
import { TouchableOpacity, Text, Image, View } from 'react-native';
import { findEmojiUnicode } from '../utility/emojiOneHelper'
// import emojione from 'emojione';
const TouchableEmoji = (props) => {
  let emojiUnicode = findEmojiUnicode(props.name)
  var image = `${emojiUnicode}.png`;
  console.log(props.emojiHeight)

  return (
    <TouchableOpacity
      style={props.style}
      onPress={ () => props.onEmojiPress(props.index) }>
      <Image source={{uri: image}} style={{ height: props.emojiHeight, width: props.emojiHeight, justifyContent: 'center', alignItems: 'center', }}  />
    </TouchableOpacity>
  )
};

export default TouchableEmoji;

//
// <Text style={{fontSize: props.emojiHeight, textAlign: 'center'}}>
//   {emojione.shortnameToImage(`:${props.name}:`)}
// </Text>
