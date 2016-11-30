import { combineReducers } from 'redux';
// Reducers
import app from './app';
import hockey from './hockey';
import museum from './museum';
import tweets from './tweets';
import user from './user';

export default combineReducers({
    app,
    hockey,
    museum,
    tweets,
    user,
});