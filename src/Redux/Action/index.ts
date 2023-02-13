import axios from 'axios';
import { Dispatch } from 'redux';
import {
	CreateAUserDispatchType,
	USER_FAIL,
	USER_LOADING,
	USER_SUCCESS,
} from './actionType';

// create a user/Register
export const CraeteAUserAction =
	() => async (dispatch: Dispatch<CreateAUserDispatchType>) => {
		try {
			dispatch({
				type: USER_LOADING,
			});

			const res = await axios.get('');

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
