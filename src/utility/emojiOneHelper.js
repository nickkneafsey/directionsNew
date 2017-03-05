const obj = require('./emoji.json')
export const findEmojiUnicode = (emoji) => {

  let emojiObj = obj[emoji];
  if (emojiObj === undefined) {
    console.log(`${emoji} is fucking up`)
  }
  let  emojiUnicode = emojiObj.unicode;


  return emojiUnicode;
}
