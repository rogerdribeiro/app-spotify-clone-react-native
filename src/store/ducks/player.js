import Immutable from 'seamless-immutable';

export const Types = {
  SET_SONG_REQUEST: 'search/SET_SONG_REQUEST',
  SET_SONG_SUCCESS: 'search/SET_SONG_SUCCESS',
  SET_SONG_FAILURE: 'search/SET_SONG_FAILURE',
};

const INITIAL_STATE = Immutable({
  currentSong: null,
});

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.SET_SONG_REQUEST:
      return { ...state };
    case Types.SET_SONG_SUCCESS:
      return {
        ...state,
      };
    case Types.SET_SONG_FAILURE:
      return { ...state };

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
