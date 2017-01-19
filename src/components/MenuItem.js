import React from 'react';
import { TouchableWithoutFeedback, Text, View } from 'react-native'
import { CardSection } from './common';

const MenuItem = ({ onRowPress, text }) => {
  return (
    <View>
      <TouchableWithoutFeedback onPress={onRowPress.bind(this)}>
        <View>
          <CardSection>
            <Text>
              {text}
            </Text>
          </CardSection>
        </View>
      </TouchableWithoutFeedback>
    </View>
  )
}

export default MenuItem;
