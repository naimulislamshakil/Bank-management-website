import { combineReducers } from 'redux';
import { CreateAUserReducer, LoginReducer } from '.';

const rootReducer = combineReducers({
	CreateAUsers: CreateAUserReducer,
	LoginUsers: LoginReducer,
});

export default rootReducer;
