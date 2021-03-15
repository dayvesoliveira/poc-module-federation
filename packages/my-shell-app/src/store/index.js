import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers';
// import authStore from 'auth/auth-store';

export default createStore(
	combineReducers({
		...reducers, // internal reducers
		// auth: authStore.reducer
	}),
	applyMiddleware(thunk)
);