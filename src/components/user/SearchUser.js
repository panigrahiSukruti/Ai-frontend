import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUserData } from '../../store/user/userActions'; // import the fetchUserData action from userActions file 
import { useNavigate } from 'react-router-dom';

const SearchUser = ({ onUserSelect }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [inputError, setInputError] = useState('');
  const [username, setUsername] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target)
    const formObj = Object.fromEntries(formData.entries())
    if (!formObj.username) {
      setInputError("username Can't be empty");
    } else {
      dispatch(fetchUserData(formObj.username)); // dispatch the fetchUserData action with the entered username as parameter
      navigate(`/${formObj.username}`, {state : {username : formObj.username}}); // navigate to the projects page with the entered username as state
    }
    console.log("formData", formObj);
  }

  return (
    <div className='container'>
      <form onSubmit={handleSubmit} className='form'>
        <input
          className={inputError ? 'input-error' : ''}
          type="text"
          name='username'
          // value={username}
          // onChange={(e) => setUsername(e.target.value)}
          placeholder="Enter GitHub username"
        />
         {/* {inputError && <p className="error-message">{inputError}</p>} */}
        <button className='search-button' type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchUser;
