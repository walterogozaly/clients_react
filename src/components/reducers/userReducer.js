import { NEW_USER, FETCH_USERS } from '../../actions/types';

const initialState = {
  items: [], /* represents users that we fetch */
  item: {} /* represents the single user that we add */
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_USERS: 
      return {
        ...state,
        items: action.payload
      }
    case NEW_USER:
      return {
        ...state,
        item: action.payload
      }
    default:
      return state;

  }
}