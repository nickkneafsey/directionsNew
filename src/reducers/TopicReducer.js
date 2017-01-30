import {
  UPDATE_SELECTED_TOPIC
} from '../actions/TopicActions';

const INITIAL_STATE = {
  topics: [ "Before and After", "Sequences", "Order", "All Topics" ],
  selectedTopic: ""
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_SELECTED_TOPIC:
      return { ...state, selectedTopic: action.payload }
    default:
      return state;
  }
}
