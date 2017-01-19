import { Dimensions } from 'react-native';

export const vw = (percentageWidth) => {
  return Dimensions.get('window').width * (percentageWidth);
}

export const vh = (percentageHeight) => {
  return Dimensions.get('window').height * (percentageHeight);
}
