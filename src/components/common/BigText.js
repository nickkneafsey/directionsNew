import React from 'react';
import { Text, Dimensions } from 'react-native';

const BigText = (props) => {
  let width = Dimensions.get('window').width;
  let size = (width > 500) ? styles.bigTextStyle : styles.smallTextStyle
  return (
    <Text style={[ size, props.style ]}>
      {props.children}
    </Text>
  );
};

const styles = {
  bigTextStyle: {
    fontSize: 20
  },
  
  smallTextSyle: {
    fontSize: 15
  }
}

export { BigText };
