import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, useNavigate, useParams, useLocation } from 'react-router-dom';
import { fetchUserData } from '../store/user/userActions';
import { fetchRepos } from '../store/repo/repoActions'; // import the fetchRepos action from repoActions file

const UserDetails = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();
  // const location = useLocation();
  const { username } = useParams();

  // const { username } = location.state; 

  const { data: users, loading, error } = useSelector((state) => state.user); // get the user data from the store
  const { data: repos, loading: repoLoading, error: repoError } = useSelector((state) => state.repos); // get the repositories data from the store

  useEffect(() => {
    console.log("useEffect to fetch user triggered");
    dispatch(fetchUserData(username)); // Dispatch action to fetch user data when the component mounts
  }, [dispatch, username]);

  useEffect(() => {
    console.log("useEffect triggered");
    if (username) {
      dispatch(fetchRepos(username));
    }
  }, [dispatch, username]);

  return (
    <div className='main-container'>
      {(!repoLoading && !loading) && ( // check if both loading and repoLoading are false
        <div>
          <div className="image-container">
            <div className='sub-image-container'>
              <img src={users?.avatar_url} alt='avatar' className="circular-image" />
              <Link to={`followers`} className=''>
              <button className='followers-btn'>{users?.followers} <span>followers</span></button></Link>
            </div>
            <div className="user-details">
              <h1 className='user-name'>{users?.name}</h1>
              <span className='user-id'>{users?.login}</span>
              <span className='user-add'>{users?.bio}</span>
              <span className='user-add'>{users?.company}</span>
              <span className='user-add'>{users?.location}</span>
            </div>
          </div>

          <div className="card-container">
            {repos && (repos.map((repo, index) => (
              <div className="card">
                <div className="card-header">
                  <a href="#" className="card-title">{repo.name}</a>
                </div>
                <p className="card-description">{repo.description}</p>
                <div className="card-footer">
                  <span className="language">
                    <span className={`${repo.language ? 'language-color' : ''}`}></span>
                    {repo.language}
                  </span>
                  <span className="stars">★ {repo.watchers}</span>
                  <span className="forks">⑂ {repo.forks}</span>
                </div>
              </div>
            )
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
