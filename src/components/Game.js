import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView, Text } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import Emoji from 'react-native-emoji';
import { CardSection, Button } from './common';
import TouchableEmoji from './TouchableEmoji';
import { vh } from '../utility/StyleUtility';
import ScorePage from './ScorePage';
import * as Sagas from '../sagas'
import {
  addToAnswerArray,
  incrementQuestionIterator,
  resetQuestionIterator,
  clearAnswerArray,
  incrementScore,
  resetScore
} from '../actions/GameActions';

class Game extends Component {
  componentWillReceiveProps(nextProps) {
    this.checkForWinner(nextProps.answerArray, nextProps.i);
  }

  componentDidMount() {
    if (this.props.i === Sagas[this.props.selectedTopicSaga].length) {
      this.props.resetQuestionIterator()
    }
  }

  checkForWinner(answer, i) {
    // Reset score if it is the first question
    if (i === 0) {
      this.props.resetScore();
    }

    if (i === Sagas[this.props.selectedTopicSaga].length) {
      // Show score page
      this.render();
    } else {
      console.log("Answer Array", answer);
      console.log("i", i);
      console.log("correct answer", Sagas[this.props.selectedTopicSaga][i].correctAnswer);
      if (_.isEqual(Sagas[this.props.selectedTopicSaga][i].correctAnswer, answer)) {
        console.log("Correct");
        this.props.incrementQuestionIterator();
        this.props.clearAnswerArray();
        this.props.incrementScore();
        this.render();
      } else if (Sagas[this.props.selectedTopicSaga][i].correctAnswer.length === answer.length) {
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

    if (i === Sagas[this.props.selectedTopicSaga].length) {
      return <ScorePage score={score} total={Sagas[this.props.selectedTopicSaga].length} />
    }

    // hacky way to size up emojis for screen
    const h = 1/(Sagas[this.props.selectedTopicSaga][i].emojis.length + 2.5)
    const emojiHeight = vh(h)

    return (
      <View style={{flex: 1}}>
        <ScrollView>
          <CardSection>
            <Text>{Sagas[this.props.selectedTopicSaga][i].directions}</Text>
          </CardSection>
          {
            Sagas[this.props.selectedTopicSaga][i].emojis.map((emojiName, iterator) => {
              return (
                <TouchableEmoji
                  key={iterator}
                  index={iterator}
                  name={emojiName}
                  emojiHeight={emojiHeight}
                  onEmojiPress={this.onEmojiPress.bind(this)}
                  />
              )
            })
          }
        </ScrollView>
        <CardSection>
          <Button onPress={this.props.clearAnswerArray.bind(this)}>
            Reset Answers
          </Button>
        </CardSection>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  let selectedTopicSaga;
  switch(state.topic.selectedTopic) {
    case "Before and After":
      selectedTopicSaga = "beforeAndAfter";
    default:
      selectedTopicSaga = "sagaOne";
  }

  return {
    answerArray: state.game.answerArray,
    i: state.game.questionIterator,
    score: state.game.score,
    selectedTopicSaga
  }
};

export default connect(mapStateToProps, {
  addToAnswerArray,
  incrementQuestionIterator,
  resetQuestionIterator,
  clearAnswerArray,
  incrementScore,
  resetScore
})(Game);
