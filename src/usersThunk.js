import axios from 'axios';
import { setUsers, setUser } from './actions';

const request = axios.create({
  baseURL: 'http://localhost:3008',
});

export const requestGetUsers = () => async (dispatch, getState) => {
  try {
    const response = await request.get('/users', { params: { title: 'qui est esse' } });
    dispatch(setUsers({ records: response.data }));
  } catch (err) {
    console.log(err);
  }
}

export const requestGetUser = (userId) => async (dispatch, getState) => {
  try {
    const response = await request.get(`/users/${userId}`);
    dispatch(setUser(response.data));
  } catch (err) {
    console.log(err);
  }
}

export const requestUpdateUser = ({ id, ...restDetails }, history) => async (dispatch, getState) => {
  try {
    await request.put(`/users/${id}`, restDetails);
    history.push('/users');
  } catch (err) {
    console.log(err);
  }
}
