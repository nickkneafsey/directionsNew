import {
  UPDATE_SELECTED_TOPIC
} from '../actions/TopicActions';
import * as Sagas from '../sagas'
import _ from 'lodash'

const INITIAL_STATE = {
  topics: [ "Before and After", "Sequences", "Order", "All Topics" ],
  selectedTopic: "",
  sagas: []
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case UPDATE_SELECTED_TOPIC:
      sagas = determineSagas(action.payload)
      return { ...state, selectedTopic: action.payload, sagas }
    default:
      return state;
  }
}

// Map topic to Saga and shuffle sagas
const determineSagas = (topic) => {
  let sagas;
  switch(topic) {
    case "Before and After":
      sagas = Sagas['beforeAndAfter'];
    default:
      sagas = Sagas['sagaOne']
  }
  return _.shuffle(sagas);
};
