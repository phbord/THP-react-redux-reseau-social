import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import Cookies from 'js-cookie'

import { login } from '../redux/index.jsx'
import InputText from 'components/form/InputText';
import InputEmail from 'components/form/InputEmail';
import InputPassword from 'components/form/InputPassword';
import ButtonSubmit from 'components/form/ButtonSubmit';

const Register = () => {
  
  const [state, setState] = React.useState({
    username: "",
    email: "",
    password: ""
  })
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('DATA => ', state)
    await dispatch(login(state, '/register'))
    if (Cookies.get('token')) {
      history.push('/')
    }
  }

  return (
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
                    email: e.target.value
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
  );
};

export default Register;