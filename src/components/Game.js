import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import Speech from 'react-native-speech';
import { CardSection, Button, BigText } from './common';
import TouchableEmoji from './TouchableEmoji';
import SelectionsRow from './SelectionsRow';
import { vh } from '../utility/StyleUtility';
import ScorePage from './ScorePage';
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
    // Check if it is a new question and if we are past the last saga
    if (this.props.i !== nextProps.i && (nextProps.i !== this.props.sagas.length)) {
      this.speak(nextProps.sagas[nextProps.i].directions);
    }

    if (this.props.sagas[this.props.i].correctAnswer.length === nextProps.answerArray.length) {
      Speech.stop();
    }
    console.log(this.props.sagas[this.props.i].directions)

    this.checkForWinner(nextProps.answerArray, nextProps.i);
  }

  componentDidMount() {
    const { sagas, i } = this.props;


    if (this.props.i === this.props.sagas.length) {
      this.props.resetQuestionIterator()
    }

    this.speak(sagas[i].directions);
  }

  speak(words) {
    // Speech.resume();
    Speech.speak({
      text: words,
      voice: 'en-US',
      rate: 0.4
    }).then(started => {
      // Success code
      "Success?"
    })
    .catch(error => {
      // Failure code
      console.log("ERROR:", error)
    });
  }

  checkForWinner(answer, i) {
    // Reset score if it is the first question
    if (i === 0) {
      this.props.resetScore();
    }

    if (i === this.props.sagas.length) {
      // Show score page
      this.render();
    } else {
      console.log("Answer Array", answer);
      console.log("i", i);
      console.log("correct answer", this.props.sagas[i].correctAnswer);
      if (_.isEqual(this.props.sagas[i].correctAnswer, answer)) {
        console.log("Correct");
        this.props.incrementQuestionIterator();
        this.props.clearAnswerArray();
        this.props.incrementScore();
        this.render();
      } else if (this.props.sagas[i].correctAnswer.length === answer.length) {
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

  onRepeatButtonPress() {
    const { sagas, i } = this.props;
    this.speak(sagas[i].directions);
  }

  // TODO fix the key below as it is bad practice
  render() {
    const { i, score } = this.props;

    if (i === this.props.sagas.length) {
      return <ScorePage score={score} total={this.props.sagas.length} />
    }

    return (
      <View style={{flex: 1}}>
        <View style={{flex: 8}}>
          <CardSection style={{
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            flexDirection:'row',
          }}>
            <BigText style={{ flex: 4 }}>
              {`${this.props.sagas[i].directions} `}
            </BigText>
            <TouchableEmoji
              name={'arrows_counterclockwise'}
              onEmojiPress={this.onRepeatButtonPress.bind(this)}
              />
          </CardSection>
          {
            this.props.sagas[i].emojis.map((emojiName, iterator) => {
              return (
                <TouchableEmoji
                  key={iterator}
                  index={iterator}
                  name={emojiName}
                  onEmojiPress={this.onEmojiPress.bind(this)}
                  />
              )
            })
          }
        </View>
        <CardSection style={{flex: 0.3}}>
          <SelectionsRow
            selections={this.props.answerArray}
            emojis={this.props.sagas[i].emojis}
          />
        </CardSection>
        <CardSection style={{flex: 1}}>
          <Button onPress={this.props.clearAnswerArray.bind(this)}>
            Reset Answers
          </Button>
        </CardSection>
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    answerArray: state.game.answerArray,
    i: state.game.questionIterator,
    score: state.game.score,
    sagas
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
