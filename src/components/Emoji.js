import React from 'react';
import { Image } from 'react-native';
import { findEmojiUnicode } from '../utility/emojiOneHelper';

const Emoji = (props) => {
  let emojiUnicode = findEmojiUnicode(props.name)
  var image = `${emojiUnicode}.png`;

  return (
    <Image source={{uri: image}} style={{ height: props.emojiHeight, width: props.emojiHeight, justifyContent: 'center', alignItems: 'center', }}  />
  )

}

export default Emoji;
