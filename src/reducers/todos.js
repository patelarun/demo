import { SET_TODO, ADD_TODO, UPDATE_TODO, DELETE_TODO, RESET_TODO_FORM } from '../actions';

const initialState = {
  todo: { message: '' },
  todos: [],
};

export default function todos(state = initialState, action) {
  switch (action.type) {
    case RESET_TODO_FORM:
      return {
        ...state,
        todo: initialState.todo,
      }
    case SET_TODO:
      return {
        ...state,
        todo: { ...state.todo, ...action.payload },
      }
    case ADD_TODO:
      return {
        ...state,
        todo: initialState.todo,
        todos: [...state.todos, action.payload],
      }
    case UPDATE_TODO:
      return {
        ...state,
        todo: initialState.todo,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return { ...todo, ...action.payload };
          }
          return todo;
        }),
      }
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload.id),
      }

    default:
      return state
  }
}
