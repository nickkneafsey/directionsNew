import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, BigText } from './common';
import DonutChart from './DonutChart';

class ScorePage extends Component {
  calculateScore(score, total) {
    return parseInt(parseInt(score) / parseInt(total) * 100)
  }

  render() {
    const { score, total } = this.props;
    const incorrect = parseInt(total) - parseInt(score);
    const correct = parseInt(score);
    const data = [
      {
        "name": "correct",
        "total": correct
      },
      {
        "name": "incorrect",
        "total": incorrect
      }
    ];

    return (
      <View>
        <CardSection>
          <BigText>{`Score: ${score} out of ${total}`}</BigText>
        </CardSection>
        <CardSection>
          <BigText>{`${this.calculateScore(score, total)}%`}</BigText>
        </CardSection>
        <DonutChart
          data={data}
        />
      </View>
    )
  }
}

export default ScorePage;
