import React, { Component } from 'react';
import { View, Text } from 'react-native';
import DonutChart from './DonutChart';

class ScorePage extends Component {
  calculateScore(score, total) {
    return parseInt(parseInt(score) / parseInt(total) * 100)
  }

  render() {
    const { score, total } = this.props;
    const incorrect = parseInt(total) - parseInt(score);
    const correct = parseInt(score);
    console.log(correct, incorrect)

    return (
      <View>
        <Text>{`Score: ${score} out of ${total}`}</Text>
        <Text>{`${this.calculateScore(score, total)}%`}</Text>
        <DonutChart
          data={
            [
              {
                "name": "correct",
                "total": correct
              },
              {
                "name": "incorrect",
                "total": incorrect
              }
            ]
          }
        />
      </View>
    )
  }
}

export default ScorePage;
