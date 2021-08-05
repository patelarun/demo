import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { requestGetUsers } from './usersThunk';

export default function Users () {
  const dispatch = useDispatch();
  const history = useHistory();
  const records = useSelector((state) => state.users.records);

  useEffect(() => {
    dispatch(requestGetUsers());
  }, [dispatch]);

  const recordFields = records[0] ? Object.keys(records[0]) : [];

  const onClickRecord = (id) => {
    history.push(`/users/${id}/edit`);
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            {recordFields.map((header) => (
              <th key={header}>
                {header}
              </th>
            ))}
          </tr>
        </thead>
          <tbody>
            {records.map((record) => (
              <tr onClick={() => onClickRecord(record.id)} key={record.id}>
                {recordFields.map((field) => (
                  <td key={`${record.id}-${field}`}>
                    {typeof record[field] === "object" ? JSON.stringify(record[field]) : record[field]}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
