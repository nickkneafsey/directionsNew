import React from 'react';
import { Image } from 'react-native';
import { findEmojiUnicode } from '../utility/emojiOneHelper';

const Emoji = (props) => {
  let emojiUnicode = findEmojiUnicode(props.name)
  let image = `${emojiUnicode}.png`;

  return (
    <Image source={{uri: image}} style={{ ...props.styles, resizeMode: 'contain' }}  />
  )

}

export default Emoji;
