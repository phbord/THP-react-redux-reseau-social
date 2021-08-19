import React from 'react'
import { Link ,useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

const Me = () => {
  const user = useSelector(state => state.auth.user) || {}

  return (<>
    <h1>Me</h1>
    <p>username: <strong>{user.username}</strong></p>
    <p>email: <strong>{user.email}</strong></p>
    <p>created_at: {user.created_at}</p>
    <p>updated_at: {user.updated_at}</p>
    <div>
    <Link type="button" 
          to={`/users/${user.id}`}
          className="btn btn-success me-2">Edit</Link>
    </div>
  </>);
};

export default Me;