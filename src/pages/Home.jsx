import PostsList from 'components/PostsList';
import React from 'react';
import { useSelector } from 'react-redux';
import Cookies from 'js-cookie'

const Home = () => {
  return (<>
    <h1>Welcome on My Social Network</h1>
    <p className="mt-4">This website is a training to Redux and React.</p>
    <p>We use auth and routing to create a small social media website.</p>
    { Cookies.get('token') && <PostsList /> }
  </>);
};

export default Home;