import { combineReducers } from 'redux';
import { CreateAUserReducer, LoginParsistenceReducer, LoginReducer } from '.';

const rootReducer = combineReducers({
	CreateAUsers: CreateAUserReducer,
	LoginUsers: LoginReducer,
	Parsistences: LoginParsistenceReducer,
});

export default rootReducer;
