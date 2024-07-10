import React, { useState } from 'react';
import SearchUser from './components/user/SearchUser'
import UserDetails from './components/UserDetails';
import { Routes, Route } from 'react-router-dom';
import Followers from './components/follower/follower';
import './App.css';

const App = () => {
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <div>
      <Routes>
        <Route path='/' element={<SearchUser />} />
        <Route path='/:username' element={<UserDetails />} />
        <Route path='/:username/followers' element={<Followers />} />
        {/* <SearchUser onUserSelect={setSelectedUser} />
        {selectedUser && <UserDetails user={selectedUser} />} */}
      </Routes>
    </div>
  );
};

export default App;
