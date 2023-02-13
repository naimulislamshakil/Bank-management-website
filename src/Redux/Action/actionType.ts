// create a user/Registion
export const USER_LOADING = 'USER_LOADING';
export const USER_FAIL = 'USER_FAIL';
export const USER_SUCCESS = 'USER_SUCCESS';

// LOGIN USER
export const USER_LOGIN_LOADING = 'USER_LOGIN_LOADING';
export const USER_LOGIN_FAIL = 'USER_LOGIN_FAIL';
export const USER_LOGIN_SUCCESS = 'USER_LOGIN_SUCCESS';

// Create a user/Register
export type Register_User = {
	status: string;
	message: string;
};
export type UserDetils = {
	name: string;
	email: string;
	password: string;
};

export interface CreateAUserLoading {
	type: typeof USER_LOADING;
}
export interface CreateAUserFail {
	type: typeof USER_FAIL;
	payload: Register_User;
}
export interface CreateAUserSuccess {
	type: typeof USER_SUCCESS;
	payload: Register_User;
}

export type CreateAUserDispatchType =
	| CreateAUserFail
	| CreateAUserLoading
	| CreateAUserSuccess;

// LOGIN USER
export type Login_User = {
	status: string;
	message: string;
	user: {
		status: string;
		role: string;
		_id: string;
		name: string;
		email: string;
		password: string;
	};
	token: string;
};
export type UserDetilsLogin = {
	email: string;
	password: string;
};

export interface LoginLoading {
	type: typeof USER_LOGIN_LOADING;
}
export interface LoginFail {
	type: typeof USER_LOGIN_FAIL;
	payload: Register_User;
}
export interface LoginSuccess {
	type: typeof USER_LOGIN_SUCCESS;
	payload: Login_User;
}

export type LoginDispatchType = LoginFail | LoginLoading | LoginSuccess;
