import {
	CreateAUserDispatchType,
	Register_User,
	USER_FAIL,
	USER_LOADING,
	USER_SUCCESS,
} from '../Action/actionType';

// create a user/Register
interface DefaultState {
	loading: boolean;
	message?: Register_User;
	error: null | any;
}

const initialState: DefaultState = {
	loading: false,
	error: null,
};

export const CreateAUserReducer = (
	state: DefaultState = initialState,
	action: CreateAUserDispatchType
): DefaultState => {
	switch (action.type) {
		case USER_LOADING:
			return {
				loading: true,
				error: null,
			};
		case USER_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};
