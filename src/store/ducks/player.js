import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'search/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'search/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'search/SET_SONG_FAILURE',
};

const INITIAL_STATE = Immutable({
  currentSong: {},
  loadingId: null,
  error: null,
});

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST:
      return { ...state, loadingId: action.payload.song.id };
    case Types.SET_SONG_SUCCESS:
      return {
        ...state,
        loadingId: null,
        currentSong: action.payload.song,
      };
    case Types.SET_SONG_FAILURE:
      return { ...state, error: action.payload.error, loadingId: null };

    default:
      return state;
  }
}

export const Creators = {
  setSongRequest: song => ({
    type: Types.SET_SONG_REQUEST,
    payload: { song },
  }),
  setSongSuccess: song => ({
    type: Types.SET_SONG_SUCCESS,
    payload: { song },
  }),
  setSongFailure: error => ({
    type: Types.SET_SONG_FAILURE,
    payload: { error },
  }),
};
