import { FETCH_USERS, NEW_USER } from './types';

export const fetchUsers = () => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res => res.json())
  .then(clients => dispatch({
    type: FETCH_USERS,
    payload: clients
  }))
}

export const createUser = (userData) => dispatch => {
  fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(userData)
    })
    .then(res => res.json())
    .then(data => dispatch({
      type: NEW_USER,
      payload: data
    }))
}