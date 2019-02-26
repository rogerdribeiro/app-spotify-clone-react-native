import { call, put } from 'redux-saga/effects';
import RNSound from 'react-native-sound/sound';

import { Creators as PlayerActions } from '../ducks/player';

const Sound = new RNSound();

export function* play() {
  try {
    yield call(Sound.play);
  } catch (err) {
    yield put(PlayerActions.setSongFailure(err.message));
  }
}
export function* pause() {
  try {
    yield call(Sound.pause);
  } catch (err) {
    yield put(PlayerActions.setSongFailure(err.message));
  }
}

export function* setSong(action) {
  try {
    if (Sound.isLoaded()) yield call(Sound.release);

    yield call(Sound.init, action.payload.song.file);
    yield call(play);
    yield put(PlayerActions.setSongSuccess(action.payload.song));
  } catch (err) {
    yield put(PlayerActions.setSongFailure(err.message));
  }
}
