import axios from 'axios';
import { Dispatch } from 'redux';
import {
	CreateAUserDispatchType,
	UserDetils,
	USER_FAIL,
	USER_LOADING,
	USER_SUCCESS,
} from './actionType';

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
