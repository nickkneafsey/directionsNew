import React, { Component } from 'react';
import { View } from 'react-native';
import { CardSection, BigText } from './common';
import DonutChart from './DonutChart';
import Emoji from 'react-native-emoji';

class ScorePage extends Component {
  calculateScore(score, total) {
    return parseInt(parseInt(score) / parseInt(total) * 100)
  }
  renderChartOrEmoji(score, total, data) {
    if (score === total) {
      return (
        <BigText style={{ fontSize: 100, textAlign: 'center' }}>
          <Emoji name={'tada'} />
        </BigText>
      )
    } else {
      return <DonutChart data={data} />
    }
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
        {
          this.renderChartOrEmoji(score, total, data)
        }
      </View>
    )
  }
}

export default ScorePage;
