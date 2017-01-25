import {
  ADD_TO_ANSWER_ARRAY,
  INCREMENT_QUESTION_ITERATOR,
  RESET_QUESTION_ITERATOR,
  CLEAR_ANSWER_ARRAY,
  INCREMENT_SCORE,
  RESET_SCORE
} from '../actions/GameActions';

const INITIAL_STATE = {
  answerArray: [],
  questionIterator: 0,
  score: 0
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case ADD_TO_ANSWER_ARRAY:
      return { ...state, answerArray: [ ...state.answerArray, action.payload ] };
    case INCREMENT_QUESTION_ITERATOR:
      return { ...state, questionIterator: state.questionIterator + 1 };
    case RESET_QUESTION_ITERATOR:
      return { ...state, questionIterator: 0 };
    case CLEAR_ANSWER_ARRAY:
      return { ...state, answerArray: [] };
    case INCREMENT_SCORE:
      return { ...state, score: state.score + 1 };
    case RESET_SCORE:
      return { ...state, score: 0 };
    default:
      return state;
  }
}
