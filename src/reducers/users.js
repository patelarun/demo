import { SET_USERS, SET_USER } from '../actions';

const initialState = {
  records: [],
  record: {
    name: '',
  },
};

export default function users(state = initialState, action) {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        records: action.payload.records,
      }
    case SET_USER:
      return {
        ...state,
        record: action.payload,
      }

    default:
      return state
  }
}
