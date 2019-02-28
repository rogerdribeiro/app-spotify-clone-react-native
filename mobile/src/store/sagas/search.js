import { call, put } from 'redux-saga/effects';
import api from '../../services/api';

import { Creators as SearchActions } from '../ducks/search';

export function* search(action) {
  try {
    const response = yield call(api.get, `/songs?search=${action.payload.term}`);
    yield put(SearchActions.searchSuccess(response.data));
  } catch (err) {
    yield put(SearchActions.searchFailure(err.message));
  }
}
