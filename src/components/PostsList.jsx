import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { getPosts, countPosts } from '../redux/index.jsx'


const PostsList = () => {
  const dispatch = useDispatch()
  const [posts, setPosts] = React.useState([])
  const [postsCount, setCountPosts] = React.useState('')

  React.useEffect(() => {
    getPosts(setPosts)
    countPosts(setCountPosts)
  }, [])

  return (<>
    <h1>Posts list</h1>
    <h5>Number: {postsCount}</h5>
    <ul className="list-group">
      {
        posts && posts.map(post => (
          <li key={post.id} className="list-group-item">
            <p>{post.text}</p>
            <div className="d-flex">
              <Link type="button" 
                    to={`/posts/${posts.id}`}
                    className="btn btn-primary me-2">Details</Link>
              <div className="btn btn-secondary position-relative">
                likes
                <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                  {post.like}
                </span>
              </div>
            </div>
          </li>
        ))
      }
    </ul>
  </>);
};

export default PostsList;