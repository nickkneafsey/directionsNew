import React, { Component } from 'react';
import { View } from 'react-native';
import _ from 'lodash';
import { CardSection, BigText } from './common';
import DonutChart from './DonutChart';
import Emoji from './Emoji';

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
        <View style={{ flex: 1 }}>
          <View style={[styles.displayInline, {flex: 1}]}>
             <Emoji name={'tada'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'tada'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'tada'} styles={{ height: 75, width: 75 }} />
          </View>
          <View style={[styles.displayInline, {flex: 1}]}>
             <Emoji name={'100'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'100'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'100'} styles={{ height: 75, width: 75 }} />
          </View>
          <BigText style={styles.textStyles}>
             { this.generatePraise() }
          </BigText>
          <View style={[styles.displayInline, {flex: 1}]}>
             <Emoji name={'100'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'100'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'100'} styles={{ height: 75, width: 75 }} />
          </View>
          <View style={[styles.displayInline, {flex: 1}]}>
             <Emoji name={'tada'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'tada'} styles={{ height: 75, width: 75 }} />
             <Emoji name={'tada'} styles={{ height: 75, width: 75 }} />
          </View>
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
      <View style={{ flex: 1 }}>
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
  },
  displayInline: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection:'row',
  }
}

export default ScorePage;
