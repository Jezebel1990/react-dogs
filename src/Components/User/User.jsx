import React from 'react';
import UserHeader from './UserHeader';
import Feed from '../Feed/Feed';
import UserPhotoPost from './UserPhotoPost';
import UserStats from './UserStats';
import { Routes, Route } from 'react-router-dom';

const User = () => {
  return (
  <section className="container">
    <UserHeader />
    <Routes>
      <Route  path="/" element={<Feed />}/>
      <Route path="/post"  element={<UserPhotoPost />}/>
      <Route path="/statistic" element={<UserStats />} />
    </Routes>
  </section>
  );
};

export default User
