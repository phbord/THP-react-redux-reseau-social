import React from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import Cookies from 'js-cookie'

import { fetchNewsRequest, fetchNewsSuccess, fetchNewsFailure, signIn, signOut } from '../redux/index.jsx'
import Redirection from 'components/Redirection'
import InputEmail from 'components/form/InputEmail';
import InputPassword from 'components/form/InputPassword';
import ButtonSubmit from 'components/form/ButtonSubmit';

const Login = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const getGonnected = useSelector(state => state.login.connected)
  const [connected, setConnected] = React.useState(getGonnected)
  const dispatch = useDispatch()
  const history = useHistory()
  const url = 'http://localhost:1337'

  // React.useEffect(() => {
  //   signOut()
  // }, [])

  const signIn = (email, password) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({identifier: email, password})
    }

    return (dispatch) => {
      dispatch(fetchNewsRequest())
      fetch(`${url}/auth/local`, requestOptions)
        .then(handleResponse)
        .then(user => {
          // connexion réussie
          if (user.jwt) {
            // stocker le token jwt dans un cookie (reste connecté entre les actualisations de page)
            Cookies.set('token', user.jwt)
            setConnected(true)
            history.push('/')
          }
          return user;
        })
        .catch(err => console.log('error => ', err))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setEmail(email)
    setPassword(password)
    console.log('DATA => ', {email, password})
    if (email && password) {
      dispatch(signIn(email, password, connected));
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <InputEmail name="email" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)}>Email address</InputEmail>
      <InputPassword name="password" 
                      value={password} 
                      onChange={e => setPassword(e.target.value)}>Champ mot de passe</InputPassword>
      <ButtonSubmit>Submit</ButtonSubmit>
    </form>
  );
};

export default Login;


function logout() {
  // remove user from local storage to log user out
  Cookies.remove('token')
}

function handleResponse(response) {
  return response.text().then(text => {
      const data = text && JSON.parse(text);
      if (!response.ok) {
          if (response.status === 401) {
              // auto logout if 401 response returned from api
              logout();
              //location.reload(true)
          }
          const error = (data && data.message) || response.statusText;
          return Promise.reject(error)
      }
      return data;
  });
}