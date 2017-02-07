import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { CardSection, BigText } from './common';

const MenuItem = ({ onRowPress, text }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onRowPress}>
        <View>
          <CardSection>
            <BigText>
              {text}
            </BigText>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default MenuItem;
