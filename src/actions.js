export const ADD_TODO = 'ADD_TODO';
export const SET_TODO = 'SET_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const RESET_TODO_FORM = 'RESET_TODO_FORM';

export const SET_USERS = 'SET_USERS';
export const SET_USER = 'SET_USER';
export const RESET_USER = 'RESET_USER';

export const addTodo = payload => ({ type: ADD_TODO, payload });
export const setTodo = payload => ({ type: SET_TODO, payload });
export const updateTodo = payload => ({ type: UPDATE_TODO, payload });
export const deleteTodo = payload => ({ type: DELETE_TODO, payload });
export const resetTodoForm = () => ({ type: RESET_TODO_FORM });
export const setUsers = (payload) => ({ type: SET_USERS, payload });
export const setUser = (payload) => ({ type: SET_USER, payload });
export const resetUser = (payload) => ({ type: RESET_USER, payload });
