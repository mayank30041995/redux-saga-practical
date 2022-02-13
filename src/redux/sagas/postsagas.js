import * as types from "../actionTypes";

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

import * as action from '../actions';
import { loadPostApi } from "../api";

function* onLoadPostsStartAsync() {
    try {
        const response = yield call(loadPostApi);
        if (response.status === 200) {
            yield delay(500);
            yield put(action.loadPostSuccess(response.data));
        }
    } catch (error) {
        yield put(action.loadPostError(error.response.data));
    }
}

export function* onLoadPost() {
    yield takeEvery(types.LOAD_POST_DATA, onLoadPostsStartAsync);
}
