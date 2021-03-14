import {combineReducers} from 'redux';
import promoCodeReducer from '../reducers/promoCodeReducer';

export default combineReducers ({
    promoCode: promoCodeReducer
})