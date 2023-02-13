import {
	CreateAUserDispatchType,
	LoginDispatchType,
	Login_User,
	Register_User,
	USER_FAIL,
	USER_LOADING,
	USER_LOGIN_FAIL,
	USER_LOGIN_LOADING,
	USER_LOGIN_SUCCESS,
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

// LOGIN USER
interface DefaultStateLogin {
	loading: boolean;
	message?: Login_User;
	error: null | any;
}

const initialStateLogin: DefaultStateLogin = {
	loading: false,
	error: null,
};

export const LoginReducer = (
	state: DefaultStateLogin = initialStateLogin,
	action: LoginDispatchType
): DefaultStateLogin => {
	switch (action.type) {
		case USER_LOGIN_LOADING:
			return {
				loading: true,
				error: null,
			};
		case USER_LOGIN_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_LOGIN_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};
