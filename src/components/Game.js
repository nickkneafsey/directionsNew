import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import Emoji from 'react-native-emoji';
import { CardSection } from './common/CardSection';
import TouchableEmoji from './TouchableEmoji';
import { vh } from '../utility/StyleUtility';
import ScorePage from './ScorePage';
import sagaOne from '../sagas/SagaOne';
import {
  addToAnswerArray,
  incrementQuestionIterator,
  clearAnswerArray,
  incrementScore,
  resetScore
} from '../actions/GameActions';

class Game extends Component {
  componentWillReceiveProps(nextProps) {
    this.checkForWinner(nextProps.answerArray, nextProps.i);
  }

  checkForWinner(answer, i) {
    // Reset score if it is the first question
    if (i === 0) {
      this.props.resetScore();
    }

    if (i === sagaOne.length) {
      // Show score page
      this.render();
    } else {
      console.log("Answer Array", answer);
      console.log("i", i);
      console.log("correct answer", sagaOne[i].correctAnswer);
      if (_.isEqual(sagaOne[i].correctAnswer, answer)) {
        console.log("Correct");
        this.props.incrementQuestionIterator();
        this.props.clearAnswerArray();
        this.props.incrementScore();
        this.render();
      } else if (sagaOne[i].correctAnswer.length === answer.length) {
        console.log("Incorrect");
        this.props.incrementQuestionIterator();
        this.props.clearAnswerArray();
      } else {
        console.log("In Progress")
      }
    }
  }

  onEmojiPress(name) {
    this.props.addToAnswerArray(name);
  }

  // TODO fix the key below as it is bad practice
  render() {
    const { i, score } = this.props;

    if (i === sagaOne.length) {
      return <ScorePage score={score} total={sagaOne.length} />
    }

    // hacky way to size up emojis for screen
    const h = 1/(sagaOne[i].emojis.length + 2.5)
    const emojiHeight = vh(h)

    console.log("emojiHeight", emojiHeight)

    return (
      <View>
        <CardSection>
          <Text>{sagaOne[i].directions}</Text>
        </CardSection>
        {
          sagaOne[i].emojis.map((emojiName, iterator) => {
            return (
              <TouchableEmoji
                key={iterator}
                name={emojiName}
                emojiHeight={emojiHeight}
                onEmojiPress={this.onEmojiPress.bind(this)}
                />
            )
          })
        }
      </View>
    )
  }
}


// function vw(percentageWidth) {
//   return Dimensions.get('window').width * (percentageWidth);
// }
//
// function vh(percentageHeight) {
//   return Dimensions.get('window').height * (percentageHeight);
// }

const mapStateToProps = (state) => {
  return {
    answerArray: state.game.answerArray,
    i: state.game.questionIterator,
    score: state.game.score
  }
};

export default connect(mapStateToProps, {
  addToAnswerArray,
  incrementQuestionIterator,
  clearAnswerArray,
  incrementScore,
  resetScore
})(Game);
