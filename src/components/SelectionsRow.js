import React, { Component } from 'react';
import { BigText } from './common';
import { View } from 'react-native';
import Emoji from './Emoji';

class SelectionsRow extends Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0,
      height: 0,
      width: 0
    };
  }

  onLayout(event) {
    const { x, y, width, height } = event.nativeEvent.layout;
    this.setState({ x, y, width, height })
  }

  // Return nothing if array is empty
  // Return emojis separated by spaces if there are
  renderAnswerArray(selections) {
    if (selections.length === 0) return;

    return (
      <View
        style={[styles.displayInline, { flex: 2 }]}>
        {
          selections.map((selection, i) => {
            return <Emoji key={i} name={this.props.emojis[selection]} styles={{ height: this.state.height, width: this.state.height }}/>
          })
        }
      </View>
    )

  }

  render() {
    return (
      <View
        onLayout={this.onLayout.bind(this)}
        style={[styles.displayInline, { flex: 1 }]}
      >
        <BigText style={{ flex: 1 }}>
          { `Your Answers: `}
        </BigText>
        {
          this.renderAnswerArray(this.props.selections)
        }

      </View>
    )
  }
}

const styles = {
  displayInline: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  }
}

export default SelectionsRow;
