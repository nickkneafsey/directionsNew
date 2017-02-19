import React, { Component } from 'react';
import { BigText } from './common';
import Emoji from 'react-native-emoji';

class SelectionsRow extends Component {
  // Return nothing if array is empty
  // Return emojis separated by spaces if there are
  renderAnswerArray(selections) {
    if (selections.length === 0) return;
    return selections.map((selection, i) => {
      return <Emoji key={i} name={this.props.emojis[selection]} />
    }).reduce((prev, curr) => [prev, ' ', curr])
  }

  render() {
    return (
      <BigText>
        { `Your Answers: `}
        {
          this.renderAnswerArray(this.props.selections)
        }
      </BigText>
    )
  }
}

export default SelectionsRow;
