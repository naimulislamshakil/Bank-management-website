import axios from 'axios';
import { Dispatch } from 'redux';
import {
	CreateAUserDispatchType,
	LoginDispatchType,
	LoginParsistenceDispatchType,
	UserDetils,
	UserDetilsLogin,
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
export const CraeteAUserAction =
	(data: UserDetils) => async (dispatch: Dispatch<CreateAUserDispatchType>) => {
		try {
			dispatch({
				type: USER_LOADING,
			});

			const res = await axios.post(
				'http://localhost:5000/api/v1/register/',
				data
			);

			dispatch({
				type: USER_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: USER_FAIL,
				payload: error?.message,
			});
		}
	};

// LOGIN USER
export const LoginAction =
	(data: UserDetilsLogin) => async (dispatch: Dispatch<LoginDispatchType>) => {
		try {
			dispatch({
				type: USER_LOGIN_LOADING,
			});

			const res = await axios.post(
				'http://localhost:5000/api/v1/register/login',
				data
			);

			dispatch({
				type: USER_LOGIN_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: USER_LOGIN_FAIL,
				payload: error?.message,
			});
		}
	};

// LOGIN PARSISTENCE
export const LoginParsistenceAction =
	() => async (dispatch: Dispatch<LoginParsistenceDispatchType>) => {
		try {
			dispatch({
				type: USER_PARSISTENCE_LOADING,
			});

			const res = await axios.get(
				'http://localhost:5000/api/v1/register/user_persistence',
				{
					method: 'GET',
					headers: {
						Authorization: `Bearer ${JSON.parse(
							localStorage.getItem('token')!
						)}`,
					},
				}
			);

			dispatch({
				type: USER_PARSISTENCE_SUCCESS,
				payload: res.data,
			});
		} catch (error: any) {
			dispatch({
				type: USER_PARSISTENCE_FAIL,
				payload: error?.message,
			});
		}
	};
