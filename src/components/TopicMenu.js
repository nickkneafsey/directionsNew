import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View } from 'react-native';
import { Actions } from 'react-native-router-flux';
import MenuItem from './MenuItem';
import { resetQuestionIterator } from '../actions/GameActions';
import { updateSelectedTopic } from '../actions/TopicActions';

class TopicMenu extends Component {
  onRowPress(topic) {
    this.props.resetQuestionIterator();
    this.props.updateSelectedTopic(topic)
    Actions.game();
  }

  render () {
    return (
      <View>
        {
          this.props.topics.map((topic) => (
            <MenuItem onRowPress={() => this.onRowPress(topic)} key={topic} text={topic} />
          ))
        }
      </View>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    topics: state.topic.topics
  }
}

export default connect(mapStateToProps, {
  updateSelectedTopic,
  resetQuestionIterator
})(TopicMenu);
