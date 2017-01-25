import { Dimensions } from 'react-native';

export const vw = (percentageWidth) => {
  return Dimensions.get('window').width * (percentageWidth);
}

// Multiply by 0.9 to take into account navbar
export const vh = (percentageHeight) => {
  return Dimensions.get('window').height * (percentageHeight) * 0.9;
}
