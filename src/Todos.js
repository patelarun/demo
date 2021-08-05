import { deleteTodo, setTodo } from './actions';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

export default function Todos () {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos.todos);
  const history = useHistory();

  const onClickDelete = (todo) => {
    dispatch(deleteTodo(todo));
  }

  const onClickUpdate = (todo) => {
    dispatch(setTodo(todo));
    history.push('/todo');
  }

  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li>
              {todo.message}
              <button onClick={() => onClickDelete(todo)}>Delete</button>
              <button onClick={() => onClickUpdate(todo)}>Update</button>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
