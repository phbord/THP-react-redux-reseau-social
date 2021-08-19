import React from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { findUser } from '../redux/index.jsx'
import InputText from 'components/form/InputText';
import InputEmail from 'components/form/InputEmail';
import InputPassword from 'components/form/InputPassword';
import ButtonSubmit from 'components/form/ButtonSubmit';

const Profile = () => {
  const history = useHistory()
  const { userId } = useParams()
  const [state, setState] = React.useState({
    username: "",
    identifier: "",
    password: ""
  })
  const [user, setUser] = React.useState('')
  const storeId = useSelector(state => state.users)
  //const {storeId} = useSelector(state => state.prevPath)
  //const storeId = () => history.goBack()
  const dispatch = useDispatch()

  React.useEffect(() => {
    findUser(setUser, userId)
    console.log('userId:', userId, ' / storeId:', storeId, ' / user.id:', user)
    //console.log('userId:', userId, '\n')
    // const dis = async () => await dispatch(findUser(id))
    // dis()
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault()
    //console.log('DATA => ', state)
    // await dispatch(login(state))
    // if (Cookies.get('token')) {
    //   history.push('/')
    // }
  }

  // const user = useSelector(state => state.users.foundUser) || {}
  //console.log('user: ',user)

  return (<>
    {
      user.userId === parseInt(userId) ? (<>
        <h1>Edit profile</h1>
        <form onSubmit={handleSubmit}>
          <InputText name="username" 
                      value={state.identifier} 
                      onChange={e => setState({
                        ...state,
                        username: e.target.value
                      })}>Username</InputText>
          <InputEmail name="email" 
                      value={state.identifier} 
                      onChange={e => setState({
                        ...state,
                        identifier: e.target.value
                      })}>Email address</InputEmail>
          <InputPassword name="password" 
                          value={state.password} 
                          onChange={e => setState({
                            ...state,
                            password: e.target.value
                          })}>password</InputPassword>
          <p id="error-login" className="d-none">Wrong email address or/and password</p>
          <ButtonSubmit>Submit</ButtonSubmit>
        </form>
      </>) : (<>
        <h1>Profile</h1>
        <p>username: <strong>{user.username}</strong></p>
        <p>email: <strong>{user.email}</strong></p>
        <p>created_at: {user.created_at}</p>
        <p>updated_at: {user.updated_at}</p>
      </>)
    }
  </>);
};

export default Profile;