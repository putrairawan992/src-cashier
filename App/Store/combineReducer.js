import { combineReducers } from 'redux';
import GlobalReducer from './GlobalReducer/reducer';


export default combineReducers({
	defaultReducer: () => [],
	globalReducer: GlobalReducer
});
