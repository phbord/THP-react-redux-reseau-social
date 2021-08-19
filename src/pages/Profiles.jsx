import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getUsers } from '../redux/index.jsx'

const Profiles = () => {
  const dispatch = useDispatch()
  const [users, setUsers] = React.useState([])

  React.useEffect(() => {
    getUsers(setUsers)
  }, [])

  return (<>
    <h1>Profile list</h1>
    <ul className="list-group">
      {
        users && users.map(user => (
          <li key={user.id} className="list-group-item">
            <p>Id: <strong>{user.id}</strong></p>
            <p>Username: <strong>{user.username}</strong></p>
            <p>Email: <strong>{user.email}</strong></p>
            <p>
              <Link type="button" 
                    to={`/users/${user.id}`}
                    className="btn btn-primary">Details</Link>
            </p>
          </li>
        ))
      }
    </ul>
  </>);
};

export default Profiles;