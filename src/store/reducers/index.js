import { combineReducers } from 'redux';

import userProfile from './userProfile';
import messages from './messages';

export default combineReducers({
  userProfile,
  messages,
});
