import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, ScrollView } from 'react-native';
import _ from 'lodash';
import { Actions } from 'react-native-router-flux';
import Emoji from 'react-native-emoji';
import Sound from 'react-native-sound';
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
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      height: 0,
      width: 0
    };
    console.log(Sound)
    // Sound.setCategory('Playback');
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.i !== nextProps.i) {
      const s = new Sound('vocals/testing.mp3', Sound.MAIN_BUNDLE, (e) => {
        if (e) {
          console.log('error', e);
        } else {
          // s.setSpeed(1);
          console.log('duration', s.getDuration());
          s.play();
        }
      });
    }

    this.checkForWinner(nextProps.answerArray, nextProps.i);
  }

  componentDidMount() {
    if (this.props.i === this.props.sagas.length) {
      this.props.resetQuestionIterator()
    }
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

  onLayout(event) {
    const { x, y, width, height } = event.nativeEvent.layout;
    this.setState({ x, y, width, height })
  }

  // TODO fix the key below as it is bad practice
  render() {
    const { i, score } = this.props;

    if (i === this.props.sagas.length) {
      return <ScorePage score={score} total={this.props.sagas.length} />
    }

    // hacky way to size up emojis for screen
    // const h = 1/(this.props.sagas[i].emojis.length + 4)
    // const emojiHeight = vh(h)
    const emojiHeight = (this.state.height) / (this.props.sagas[i].emojis.length + 2);

    return (
      <View style={{flex: 1}}>
        <ScrollView onLayout={this.onLayout.bind(this)}>
          <CardSection>
            <BigText>{this.props.sagas[i].directions}</BigText>
          </CardSection>
          {
            this.props.sagas[i].emojis.map((emojiName, iterator) => {
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
          <SelectionsRow
            selections={this.props.answerArray}
            emojis={this.props.sagas[i].emojis}
          />
        </CardSection>
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
