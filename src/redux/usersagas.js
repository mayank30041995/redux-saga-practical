import * as types from "./actionTypes";

import {
    take,
    takeEvery,
    takeLatest,
    put,
    all,
    delay,
    fork,
    call,
} from "redux-saga/effects";

import * as action from './actions';
import { loadUsersApi, createUserApi} from "./api";

function* onLoadUsersStartAsync() {
    try {
        const response = yield call(loadUsersApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(action.loadUsersSuccess(response.data));
        }
    } catch (error) {
        yield put(action.loadUsersError(error.response.data));
    }
}

function* onCreateUserStartAsync({payload}) {
    try{
        const response = yield call(createUserApi, payload);
        if(response.status === 201) {     //should status be 201 
             yield put(action.createUserSuccess(response.data))
        }
    }catch(error){
         yield put(action.createUserError(error.response.data))
    }

}
function* onLoadUsers() {
    yield takeEvery(types.LOAD_USERS_START, onLoadUsersStartAsync);
}

function* onCreateUser() {
    yield takeLatest(types.CREATE_USER_START, onCreateUserStartAsync);
}

const userSagas = [fork(onLoadUsers), fork(onCreateUser)];

export default function* rootSaga() {
    yield all([...userSagas]);
}