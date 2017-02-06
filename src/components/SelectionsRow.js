import React, { Component } from 'react';
import { Text } from 'react-native';
import Emoji from 'react-native-emoji';

class SelectionsRow extends Component {
  render() {
    return (
      <Text>
      Your Answers:
      {
        this.props.selections.map((selection, i) => {
          return <Emoji key={i} name={this.props.emojis[selection]} />
        })
      }
      </Text>
    )
  }
}

export default SelectionsRow;
