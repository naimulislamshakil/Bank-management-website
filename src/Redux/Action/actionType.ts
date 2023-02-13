// create a user/Registion
export const USER_LOADING = 'USER_LOADING';
export const USER_FAIL = 'USER_FAIL';
export const USER_SUCCESS = 'USER_SUCCESS';

// Create a user/Register
export type Register_User = {
	status: string;
	message: string;
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
