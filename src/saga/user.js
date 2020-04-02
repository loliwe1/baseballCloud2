import {call, put} from 'redux-saga/effects';
import {signUp, signIn, persisSignIn} from '../store/routines/routines';
import ApiService from '../services/api';
import Storage from '../services/storage';

export function* handleSignUpTrigger(action) {
    const {payload} = action;
    yield put(signUp.request());

    try{
       const response = yield call(ApiService.signUp, payload);
       const user = response.data.data;

        yield put(signUp.success(user));
    }catch(e) {
        yield put(signUp.failure(e));
    }
    yield put(signUp.fulfill());
}

export function* handleSignInTrigger(action) {
    const {payload} = action;
    yield put(signUp.request());

    try{
        const response = yield call(ApiService.signIn, payload);
        yield call(Storage.saveHeaders, response);
        const user = response.data.data;
        yield put(signIn.success(user));
    }catch(e) {
        yield put(signIn.failure(e));
        console.log(e)
    }
    yield put(signIn.fulfill());
}

export function* handlePersisSignInTrigger() {
    yield put(persisSignIn.request());
    try {
      const headers = yield call(Storage.getHeaders);
      if (!headers) throw new Error('No headers found.');
      const response = yield call(ApiService.persisSignIn, headers);
      yield put(persisSignIn.success(response));
    } catch (e) {
      yield put(persisSignIn.failure(e));
    }
  }
  



