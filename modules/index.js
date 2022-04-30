import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import counter,{ counterSaga } from './basic/counter';
import register,{ registerSaga} from './auth/register';
import login,{ loginSaga} from './auth/login';
import logout,{ logoutSaga} from './auth/logout';


const rootReducer = combineReducers({
  counter,register,login,logout
 
});

export function* rootSaga() {
  yield all([registerSaga(),counterSaga(),loginSaga(),logoutSaga()]);
}

export default rootReducer;