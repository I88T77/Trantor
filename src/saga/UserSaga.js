import { call, put, takeLatest } from 'redux-saga/effects';

import {
    FETCH_BLOG, fetchBlogsSuccess, fetchBlogsFailure
} from '../Action/UserAction';
import api from './UserApi'

function* getUsers() {
    console.log("Get USERS Saga");
    try {
        const data = yield call(api.blogs);
        console.log("Data is",data);
        yield put(fetchBlogsSuccess(data));

    } catch (error) {
        console.log("Users Fetch Error")
        yield put(fetchBlogsFailure());
        console.error(error) // eslint-disable-line

    }
}


export default function* UserSaga() {

    yield takeLatest(FETCH_BLOG, getUsers);
}