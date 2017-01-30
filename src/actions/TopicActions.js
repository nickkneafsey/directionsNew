export const UPDATE_SELECTED_TOPIC = 'UPDATE_SELECTED_TOPIC';
export const updateSelectedTopic = (newTopic) => {
  return {
    type: UPDATE_SELECTED_TOPIC,
    payload: newTopic
  };
};
