import { useEffect } from 'react';
import { setUser } from './actions';
import { requestGetUser, requestUpdateUser } from './usersThunk';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';

export default function UserForm () {
  const dispatch = useDispatch();
  const locationParams = useParams();
  const history = useHistory();
  const record = useSelector((state) => state.users.record);

  useEffect(() => {
    dispatch(requestGetUser(locationParams.id));
  }, [dispatch]);

  const onChangeInput = (event) => {
    const { name, value } = event.target;
    dispatch(setUser({ ...record, [name]: value }));
  }

  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(requestUpdateUser(record, history));
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="name-input">Name:</label>
          <input id="name-input" name="name" value={record.name} onChange={onChangeInput} />
        </div>
        <button type="submit">{record.id ? 'update' : 'add'}</button>
      </form>
    </div>
  )
}
