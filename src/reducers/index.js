import { combineReducers } from 'redux';

import StudentReducer from './StudentReducer';
import GameReducer from './GameReducer';

export default combineReducers({
  student: StudentReducer,
  game: GameReducer
})
