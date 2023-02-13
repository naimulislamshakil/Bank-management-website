import { combineReducers } from 'redux';
import { CreateAUserReducer } from '.';

const rootReducer = combineReducers({
	CreateAUsers: CreateAUserReducer,
});

export default rootReducer;
