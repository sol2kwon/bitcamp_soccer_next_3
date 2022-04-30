import {createAction, handleActions} from 'redux-actions';
import { call, delay, put, takeLatest, select, throttle} from 'redux-saga/effects';
import {HYDRATE} from "next-redux-wrapper"
import axios from 'axios'


const SERVER = 'http://127.0.0.1:5000'
const headers = {
    "Content-Type": "application/json",
    Authorization: "JWT fefege..."
}
export const initialState = {
    logoutUser: null,
    logoutError: null,
    isLogout: false,
    token: ''
}

const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';
const LOGOUT_SUCCESS = 'auth/LOGOUT_SUCCESS';
const LOGOUT_FAILURE = 'auth/LOGOUT_FAILURE';
//const LOGOUT_REQUEST = 'auth/LOGOUT_REQUEST';

export const logoutRequest = createAction(LOGOUT_REQUEST, data => data)
export const  logoutCancelled = createAction(LOGOUT_FAILURE, data => data)

export function* logoutSaga() {
    yield takeLatest(LOGOUT_REQUEST, logoutService);
    yield takeLatest(LOGOUT_FAILURE, logoutFailureService);

    function* signout(action) {
        try {
            console.log(" **** 여기가 핵심 *** " + JSON.stringify(action))
            const response = yield call(logoutAPI, action.payload)
            console.log(" 로그인 서버다녀옴: " + JSON.stringify(response.data))
            const result = response.data
            yield put({type: LOGOUT_SUCCESS, payload: result})
            
        } catch (error) {
            yield put({type: LOGOUT_FAILURE, payload: error.message})
        }
    }
}

function* logoutService() {
    try {
        yield put(window.location.href="/")
    } catch (error) {
        
    }
}

function* logoutFailureService() {
    try {
        yield put(window.location.href="/auth/login")
    } catch (error) {
        
    }
}


const logoutnAPI = payload => axios.post(
    `${SERVER}/user/logout`,
    payload,
    {headers}
)

const logout = handleActions({
    [HYDRATE]: (state, action) => ({
        ...state,
        ...action.payload
        
    }),
    [LOGOUT_SUCCESS]: (state, action) => ({
        ...state,
        loginUser: action.payload,
        isLoggined: true,
    }),
    [LOGOUT_FAILURE]: (state, action) => ({
        ...state,
        loginError: null,
    }),
    
}, initialState)


export default logout