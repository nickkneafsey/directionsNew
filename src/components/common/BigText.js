import React from 'react';
import { Text } from 'react-native';

const BigText = (props) => {
  return (
    <Text style={[ styles.textStyle, props.style ]}>
      {props.children}
    </Text>
  );
};

const styles = {
  textStyle: {
    fontSize: 20
  }
}

export { BigText };
