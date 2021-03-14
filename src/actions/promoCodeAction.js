import {PROMO_CODE} from '../actions/types.js';

export const handleChange = e => dispatch => {
  dispatch({
    type: PROMO_CODE,
    payload: e.target.value
  });
};
