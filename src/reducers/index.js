import { combineReducers } from 'redux';

import StudentReducer from './StudentReducer';
import GameReducer from './GameReducer';
import TopicReducer from './TopicReducer';

export default combineReducers({
  student: StudentReducer,
  game: GameReducer,
  topic: TopicReducer
})
