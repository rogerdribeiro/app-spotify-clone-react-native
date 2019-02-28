import Immutable from 'seamless-immutable';

export const Types = {
  REQUEST: 'search/REQUEST',
  SUCCESS: 'search/SUCCESS',
  FAILURE: 'search/FAILURE',
};

const INITIAL_STATE = Immutable({
  data: [],
  loading: false,
  error: null,
});

export default function search(state = INITIAL_STATE, action) {
  switch (action.type) {
    case Types.REQUEST:
      return { ...state, loading: true };
    case Types.SUCCESS:
      return {
        data: action.payload.data,
        loading: false,
        error: null,
      };
    case Types.FAILURE:
      return { ...state, error: action.payload.error, loading: false };

    default:
      return state;
  }
}

export const Creators = {
  searchRequest: term => ({
    type: Types.REQUEST,
    payload: { term },
  }),
  searchSuccess: data => ({
    type: Types.SUCCESS,
    payload: { data },
  }),
  searchFailure: error => ({
    type: Types.FAILURE,
    payload: { error },
  }),
};
