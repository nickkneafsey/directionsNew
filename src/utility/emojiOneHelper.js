const obj = require('./emoji.json')
export const findEmojiUnicode = (emoji) => {

  let emojiObj = obj[emoji];
  if (emojiObj === undefined) {
    console.log(`${emoji} does not have an emojiOne emoji associated with it. Check emoji.json`)
  }
  let  emojiUnicode = emojiObj.unicode;


  return emojiUnicode;
}
