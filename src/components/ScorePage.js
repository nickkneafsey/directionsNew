import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { CardSection, BigText } from './common';
import DonutChart from './DonutChart';
import Emoji from 'react-native-emoji';

class ScorePage extends Component {
  calculateScore(score, total) {
    return parseInt(parseInt(score) / parseInt(total) * 100)
  }

  generatePraise() {
    return _.sample(["Great Job!", "Nice!", "Super!", "Woo!", "Well Done!"]);
  }

  renderChartOrEmoji(score, total, data) {
    if (score === total) {
      return (
        <View>
          <BigText style={{ fontSize: 65, textAlign: 'center' }}> </BigText>
          <BigText style={{ fontSize: 65, textAlign: 'center' }}>
             <Emoji name={'tada'} />
             <Emoji name={'tada'} />
             <Emoji name={'tada'} />
          </BigText>
          <BigText style={{ fontSize: 65, textAlign: 'center' }}>
             <Emoji name={'100'} />
             <Emoji name={'100'} />
             <Emoji name={'100'} />
          </BigText>
          <BigText style={{ fontSize: 65, textAlign: 'center' }}>
             { this.generatePraise() }
          </BigText>
          <BigText style={{ fontSize: 65, textAlign: 'center' }}>
             <Emoji name={'100'} />
             <Emoji name={'100'} />
             <Emoji name={'100'} />
          </BigText>
          <BigText style={{ fontSize: 65, textAlign: 'center' }}>
             <Emoji name={'tada'} />
             <Emoji name={'tada'} />
             <Emoji name={'tada'} />
          </BigText>
        </View>
      )
    } else {
      return <DonutChart data={data} />
    }
  }

  render() {
    const { score, total } = this.props;
    const incorrect = parseInt(total) - parseInt(score);
    const correct = parseInt(score);
    const correctPercent = this.calculateScore(score, total)
    const incorrectPercent = 100 - correctPercent;

    const data = [
      {
        "name": `${correctPercent}%`,
        "total": correct
      },
      {
        "name": `${incorrectPercent}%`,
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

const styles = {
  textStyles: {
    fontSize: 65,
    textAlign: 'center',
    fontFamily: 'Futura'
  }
}

export default ScorePage;
