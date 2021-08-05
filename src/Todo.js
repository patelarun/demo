import { useEffect } from 'react';
import { setTodo, addTodo, updateTodo, resetTodoForm } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Todo () {
  const dispatch = useDispatch();
  const history = useHistory();
  const todo = useSelector((state) => state.todos.todo);

  useEffect(() => {
    return () => {
      dispatch(resetTodoForm());
    };
  }, [dispatch]);

  const onChangeInput = (event) => {
    const { value } = event.target;
    dispatch(setTodo({ message: value }));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    if (todo.id) {
      dispatch(updateTodo({ ...todo }));
    } else {
      dispatch(addTodo({ ...todo, id: new Date().getTime() }));
    }
    history.push('/todos');
  }

  return (
    <div>
      <h1>{todo.id ? 'Update' : 'Create'}</h1>
      <form onSubmit={onSubmit}>
        <input value={todo.message} onChange={onChangeInput} />
        <button type="submit">{todo.id ? 'update' : 'add'}</button>
      </form>
    </div>
  )
}
