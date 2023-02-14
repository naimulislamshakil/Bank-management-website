import {
	CreateAUserDispatchType,
	LoginDispatchType,
	LoginParsistenceDispatchType,
	Login_Parsistence_User,
	Login_User,
	Register_User,
	USER_FAIL,
	USER_LOADING,
	USER_LOGIN_FAIL,
	USER_LOGIN_LOADING,
	USER_LOGIN_SUCCESS,
	USER_PARSISTENCE_FAIL,
	USER_PARSISTENCE_LOADING,
	USER_PARSISTENCE_SUCCESS,
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

// LOGIN PARSISTENCE
interface DefaultStateLoginParsistence {
	loading: boolean;
	message?: Login_Parsistence_User;
	error: null | any;
}

const initialStateLoginParsistence: DefaultStateLoginParsistence = {
	loading: false,
	error: null,
};

export const LoginParsistenceReducer = (
	state: DefaultStateLoginParsistence = initialStateLoginParsistence,
	action: LoginParsistenceDispatchType
): DefaultStateLoginParsistence => {
	switch (action.type) {
		case USER_PARSISTENCE_LOADING:
			return {
				loading: true,
				error: null,
			};
		case USER_PARSISTENCE_FAIL:
			return {
				loading: false,
				error: action.payload,
			};
		case USER_PARSISTENCE_SUCCESS:
			return {
				loading: false,
				error: null,
				message: action.payload,
			};

		default:
			return state;
	}
};
