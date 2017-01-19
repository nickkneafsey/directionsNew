import React, { Component } from 'react';
import { View, Text } from 'react-native';

class ScorePage extends Component {
  calculateScore(score, total) {
    return parseInt(parseInt(score) / parseInt(total) * 100)
  }

  render() {
    const { score, total } = this.props;

    return (
      <View>
        <Text>{`Score: ${score} out of ${total}`}</Text>
        <Text>{`${this.calculateScore(score, total)}%`}</Text>
      </View>
    )
  }
}

export default ScorePage;
