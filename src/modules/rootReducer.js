import { combineReducers } from 'redux';
import uriReducer from './dataReducer';
import boardReducer from './boardReducer';
 
const rootReducer = combineReducers({
    uriReducer,
    boardReducer
});
 
export default rootReducer;

