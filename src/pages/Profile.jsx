import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';

import { findUser } from '../redux/index.jsx'

const Profile = () => {
  const [id, setId] = React.useState(useParams())
  const [user, setUser] = React.useState({})
  console.log('id: ',id)

  React.useEffect(() => {
    findUser(setUser, id)
    console.log('user: ',user)
  }, [])

  //useSelector()

  return (<>
    <h1>Profile</h1>
    <p>username: <strong>{user.username}</strong></p>
    <p>email: <strong>{user.email}</strong></p>
    <p>created_at: {user.created_at}</p>
    <p>updated_at: {user.updated_at}</p>
  </>);
};

export default Profile;