import { all, takeLatest } from 'redux-saga/effects';
import { Types as AlbumsTypes } from '../ducks/albums';
import { Types as SearchTypes } from '../ducks/search';
import { Types as PlayerTypes } from '../ducks/player';

import { getAlbums } from './albums';
import { search } from './search';
import { setSong, play, pause } from './player';

export default function* rootSaga() {
  return yield all([
    takeLatest(AlbumsTypes.GET_REQUEST, getAlbums),
    takeLatest(SearchTypes.REQUEST, search),
    takeLatest(PlayerTypes.SET_SONG_REQUEST, setSong),
    takeLatest(PlayerTypes.PLAY, play),
    takeLatest(PlayerTypes.PAUSE, pause),
  ]);
}
