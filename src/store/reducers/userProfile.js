const INITIAL_STATE = '';

const userProfile = (state = INITIAL_STATE, action) => {
  if (action.type === 'SET_USERNAME') {
    console.log(action);
    const { userName } = action;
    return {
      ...state,
      userName,
    };
  }
  return state;
};

export default userProfile;
