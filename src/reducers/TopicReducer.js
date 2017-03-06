import {
  UPDATE_SELECTED_TOPIC
} from '../actions/TopicActions';
import * as Sagas from '../sagas'
import _ from 'lodash'

const INITIAL_STATE = {
  topics: [ "Basic Directions", "Before and After", "Sequences", "Above and Below", "All Topics", "Every", "uh" ],
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
      break;
    case "Sequences":
      sagas = Sagas['sequences'];
      break;
    case "Basic Directions":
      sagas = Sagas['basicDirections'];
      break;
    case "Above and Below":
      sagas = Sagas['aboveAndBelow'];
      break;
    case "All Topics":
      sagas = _.concat(Sagas['beforeAndAfter'], Sagas['sequences'], Sagas['basicDirections'], Sagas['aboveAndBelow']);
      break;
    case "Every":
      return  _.concat(Sagas['beforeAndAfter'], Sagas['sequences'], Sagas['basicDirections'], Sagas['aboveAndBelow']);
    default:
      sagas = Sagas['sagaOne'];
  }
  return _.take(_.shuffle(sagas), 10);
};
