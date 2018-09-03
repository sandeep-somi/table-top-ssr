import types from '../types';
import store from '../../store';

const { dispatch } = store;

export function createFields(payload) {
	dispatch({
    type: types.CREATE_FORM_FIELDS,
    payload: payload
	})
}